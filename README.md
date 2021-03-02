# Comandos

## Typeorm:

Criar migration: `yarn typeorm migration:create -n MigrationName`

Executar migration: `yarn typeorm migration:run`

Reverter migration: `yarn typeorm migration:revert`

## Tests:

Arquivo configuração jest: `yarn jest --init`

Executar testes: `yarn test`

- Script executar teste (Windows): `set NODE_ENV=test jest`
- Script executar teste (Linux/Mac): `NODE_ENV=test jest`
