# 1. 운영체제 및 프로그램 설치
# (하나하나 설치하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


# 1. 운영체제 및 프로그램 설치
# (다른 사람이 다 깔아서 올려놓은 이미지 설치하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더/파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커 안에서 index.js 실행시키기
CMD node index.js


# CMD 명령어: 저장된 컴퓨터 이미지에 있는 프로그램을 실행시킬 때 사용. CMD 명령어는 이미지에 저장이 안되며 파일 당 한번만 사용 가능


