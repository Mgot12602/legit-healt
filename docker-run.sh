#!/bin/bash

# Define the image name
IMAGE_NAME="legit-helth"

# Build the Docker image
docker build -t $IMAGE_NAME .

# Run the Docker container
docker run -p 80:80 $IMAGE_NAME