FROM node:14

COPY . /myfolder/
WORKDIR /myfolder/
RUN yarn install

CMD yarn start:dev

# 포트포워딩 docker run -p 8000:3000 {imageID}
