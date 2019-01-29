FROM node:8

# Set a working directory
WORKDIR /usr/src/app

# Set default command
CMD [ "yarn", "start" ]
