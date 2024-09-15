# builder state work is to only build the code
FROM node:18 as builder
RUN mkdir -p /app
WORKDIR /app

COPY dist/final.js .

EXPOSE 4000
CMD ["node","final.js"]


