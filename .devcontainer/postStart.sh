#!/bin/bash

echo User Logged In: ${USER}

# Recursively makes the folder and it's content owned by the logged in user
sudo chown -R ${USER}:${USER} /commandhistory

echo "Transferred ownership of commandHistory Folder and it's contents to container user: ${USER}"

echo "export HISTFILE=/commandhistory/.zsh_history" >>~/.zshrc

# Function to install npm dependencies
install_npm_dependencies() {
    echo "Running 'npm install'..."
    npm install
    echo "npm install completed successfully."
}

check_node_modules() {
    # Define your JSON strings
    npmLsOutput="$(npm ls --json | jq -Sr '.dependencies | to_entries | map({(.key): .value.version}) | add' | sed -E 's/("[^"]*": "[^"]*)-[^",]+/\1/g')"

    packageLockOutput="$(jq -Sr '.dependencies + .devDependencies | to_entries | map({(.key): .value}) | add' package.json | sed 's/": "^/": "/g' | sed -E 's/("[^"]*": "[^"]*)-[^",]+/\1/g')"

    # Convert JSON strings to associative arrays
    declare -A npm_installed_versions
    declare -A package_lock_versions

    # Populate associative arrays
    while IFS=: read -r key value; do
        key=$(echo "$key")
        value=$(echo "$value")
        # Check if the value is null and print a log statement
        if [ "$value" = "null" ]; then
            install_node_modules=true
            package_not_installed=true

            echo -e "\033[1;31m Module Name: $key, version: ${value} not found locally \033[00m"
            return 1
        fi
        npm_installed_versions["$key"]=$value
    done < <(jq -r 'to_entries[] | "\(.key):\(.value)"' <<<$npmLsOutput)

    while IFS=: read -r key value; do
        key=$(echo "$key")
        value=$(echo "$value")
        package_lock_versions["$key"]=$value
    done < <(jq -r 'to_entries[] | "\(.key):\(.value)"' <<<$packageLockOutput)

    # Function to parse version string into an array
    parse_version() {
        IFS='.' read -r -a version <<<$1
        echo "${version[@]}"
    }

    echo -e "\033[1;33m Installed Modules : ${#npm_installed_versions[@]} \033[00m"
    echo -e "\033[1;33m Modules Expected to be installed as per package-lock.json : ${#package_lock_versions[@]} \033[00m"

    # Iterate over keys and compare versions
    for key in "${!npm_installed_versions[@]}"; do
        echo Module Name Checking: ${key}
        installedVersion=($(parse_version "${npm_installed_versions[$key]}"))
        versionWhichShouldBeInstalled=($(parse_version "${package_lock_versions[$key]}"))

        # Compare Major version
        if [ "${installedVersion[0]}" -lt "${versionWhichShouldBeInstalled[0]}" ]; then
            install_node_modules=true
            echo "For Module ${key} version ${package_lock_versions[${key}]} was expected but version ${npm_installed_versions[${key}]} was found installed"
            echo "INSTALLING NODE MODULES (Major version)"
            break
        elif [ "${installedVersion[0]}" -eq "${versionWhichShouldBeInstalled[0]}" ]; then
            # Compare minor version
            if [ "${installedVersion[1]}" -lt "${versionWhichShouldBeInstalled[1]}" ]; then
                install_node_modules=true
                echo "For Module ${key} version ${package_lock_versions[${key}]} was expected but version ${npm_installed_versions[${key}]} was found installed"
                echo "INSTALLING NODE MODULES (Minor version)"
                break
            elif [ "${installedVersion[1]}" -eq "${versionWhichShouldBeInstalled[1]}" ]; then
                # Compare patch version
                if [ "${installedVersion[2]}" -lt "${versionWhichShouldBeInstalled[2]}" ]; then
                    install_node_modules=true
                    echo "For Module ${key} version ${package_lock_versions[${key}]} was expected but version ${npm_installed_versions[${key}]} was found installed"
                    echo "INSTALLING NODE MODULES (Patch version)"
                    break
                fi
            fi
        fi
    done
    # fi

}

nodeModuleFolder="../node_modules"

# Check if node_modules folder exists
if [ ! -d ${nodeModuleFolderExists} ]; then
    echo -e "\033[1;31m node_modules folder not found. Installing npm dependencies...\033[00m"
    install_npm_dependencies
else
    echo NodeModules folder exists
    install_node_modules=false
    package_not_installed=false

    # Compare modules and versions
    check_node_modules

    echo install node modules : ${install_node_modules}

    if [ "${install_node_modules}" = false ]; then
        echo -e "\033[1;32m Modules and versions match between node_modules and package-lock.json. \033[00m"
    else
        if [ "${package_not_installed}" = true ]; then
            echo -e "\033[1;31m Some npm packages are not installed which are required, so reinstalling dependencies \033[00m"
        else
            echo -e "\033[1;31m Differences found between node_modules and package-lock.json. Installing npm dependencies... \033[00m"
        fi
        install_npm_dependencies
    fi
fi
