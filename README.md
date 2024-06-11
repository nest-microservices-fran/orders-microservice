# Order Microservice

## Dev

1. Clonar el repositorio
2. Instalar dependencias

```
npm install
```

3. Copiar y renombrar el archivo `.env.template` a `.env`
4. Levantar la base de datos

```
docker compose up -d
```

5. Ejecutar migración de prisma

```
npx prisma migrate dev
```

6. Ejecutar

```
npm run start:dev
```
