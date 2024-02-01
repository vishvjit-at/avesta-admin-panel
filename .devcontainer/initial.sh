#!/bin/bash

projectName=$1

#  Get current shell
shell=$(echo $SHELL | awk -F '/' '{print $NF}')

echo Current User Shell: ${shell}

# Set the filename for the shell history
history_file=".${shell}_history"
echo History File as per user shell ${history_file}

# Save the current shell history to a file
cp ~/${history_file} ./${history_file}

# Set the Docker volume name
docker_volume="${projectName}-bashhistory"

echo Docker volume name: ${docker_volume}

# Set the path inside the Docker volume where you want to store the history
docker_path="/data/"

# Copy the history file to the Docker volume
docker run --rm -v "${docker_volume}:${docker_path}" -w /app \
    -v "$(pwd):/app" alpine cp ./${history_file} /$docker_path

# Clean up: remove the local history file
rm ${history_file}

