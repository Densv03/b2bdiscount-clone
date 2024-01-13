FROM node:18-alpine AS development
ENV NODE_ENV development

# app direct
WORKDIR .
CMD ["rmdir", "-rf", "dist"]

# COPY
COPY dist ./dist

EXPOSE 4000
RUN chmod +x dist/fe-b2b/server/main.js
CMD ["node", "dist/fe-b2b/server/main.js"]

