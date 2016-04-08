FROM ubuntu:latest

RUN apt-get update -q
RUN apt-get install -yqq wget aptitude htop vim git dnsutils curl ssh sudo tree tcpdump nano psmisc gcc make build-essential libfreetype6 libfontconfig libkrb5-dev

# Install sas gem
RUN apt-get install -y ruby
RUN gem install sass

# Install Node
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN sudo apt-get install -yq nodejs

RUN npm install --global gulp-cli
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
