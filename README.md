## React

- Call API: axios, fetch,...

## Next

- Call API: Chỉ fetch không dùng được những phương thức call api khác
- Server component
- Client component

# Step

## Install project

```bash
  npm create vite@latest
```

## Thêm file settings cho Vscode

- `.vscode/settings.json`

## Cài đặt formater Prettier

```bash
npm install prittier -D
```

## Tạo file format rule

`.prettierrc.json`

## Setup pre-commit

### Install husky

```bash
npm install --save-dev husky
```

### Init hook

```bash
npx husky init
```

### Viết các rule cụ thể cho pre-commit

Viết các lệnh cần chạy trước khi commit vào file `./husky/pre-commit`

## Config alias

### Install types của node

```bash
  npm i @types/node -D
```

### Install thư viện `path`

### `vite.config.ts`

```code
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
```

## Chia thư mục - Bỏ qua

- `pages`: Các pages
- `components/features`: Các chức năng riêng biệt của các page
- `components/ui`: Các component xử dụng cho toàn bộ hệ thống

## Cài đặt thư viện UI

- https://ui.shadcn.com/

## Setup router hệ thống

- Cài đặt react-router phiên bản Data Mode
- `npm i react-router`
