FROM nginx:alpine

RUN apk add --no-cache bash nano
RUN rm -rf /usr/share/nginx/html/*

COPY ./public /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
