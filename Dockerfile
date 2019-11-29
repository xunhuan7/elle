FROM node:12.10.0

WORKDIR /app
RUN yarn config set registry https://registry.npm.taobao.org/
COPY . .

RUN rm -rf node_modules
RUN rm -rf dist

RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/debian jessie main non-free contrib" >/etc/apt/sources.list
RUN apt-get update
RUN apt-get install nginx -y

COPY nginx.conf /etc/nginx/nginx.conf

RUN yarn install --network-timeout 1000000
RUN yarn build

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo "Asia/Shanghai" > /etc/timezone
RUN date

CMD ["nginx", "-g", "daemon off;"]
