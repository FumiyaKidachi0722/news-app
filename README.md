# News App ディレクトリ構造

```
news-app/
├── assets/
│   ├── images/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── hocks/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── state/
│   ├── store/
│   └── utils/
├── App.tsx
├── app.json
├── package.json
└── tsconfig.json
```

## ディレクトリの説明

- **assets**: 画像やフォントなどの静的ファイルを格納します。
- **src**: ソースコードを格納するメインのディレクトリです。
  - **components**: Atomic Designに基づいたコンポーネントを格納します。
  - **atoms**: 最小単位のコンポーネント（例：Button, Text, Input）
  - **molecules**: atomsを組み合わせたもの（例：Form, Card）
  - **organisms**: moleculesやatomsを組み合わせたもの（例：Header, Footer）
  - **templates**: organismsやmoleculesを組み合わせてページのレイアウトを形成するもの
  - **screens**: 各画面（ページ）のコンポーネントを格納します。
  - **navigation**: ナビゲーションに関する設定を格納します。
  - **services**: API呼び出しやデータベースアクセスなどを格納します。
  - **state**: 状態管理（Redux, MobXなど）に関するファイルを格納します。
  - **utils**: ユーティリティ関数や共通の設定を格納します。
