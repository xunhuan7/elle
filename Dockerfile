FROM node:12.10.0

WORKDIR /app
COPY . .

RUN yarn config set registry https://registry.npm.taobao.org/  && \
    rm -rf node_modules  && \
    rm -rf dist  && \
    apt-get update && \
    apt-get install nginx -y && \
    yarn install --network-timeout 1000000 && \
    yarn build && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
