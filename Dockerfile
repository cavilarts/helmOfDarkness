FROM ubuntu:latest

RUN mkdir -p /usr/src/hod
WORKDIR /usr/src/hod
ADD components /usr/src/hod 
ADD server /usr/src/hod
COPY .gitignore /usr/src/hod 
COPY gulpfile.js /usr/src/hod 
COPY index.html /usr/src/hod 
COPY index.js /usr/src/hod 
COPY package.json /usr/src/hod

RUN apt-get update -q
RUN apt-get install -yqq wget aptitude htop vim git dnsutils curl ssh sudo tree tcpdump nano psmisc gcc make build-essential libfreetype6 libfontconfig libkrb5-dev

# Install sas gem
RUN apt-get install -y ruby
RUN gem install sass

# Install Node
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN sudo apt-get install -yq nodejs

#Install dependencies
RUN npm install --global gulp-cli
RUN cd /usr/src/hod && npm install

RUN npm install -g bower

EXPOSE 3000

CMD ["gulp"]