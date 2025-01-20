import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Mert Exchange",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1tdm4v5ud06gu50schulhugn7quh20tv0cq03k2p9ky7murn0fh4qzpktwj",
            cw20: "andr1ze59k9z97m3egtlnpt2n6qjgk37gqq6qmlf3uylyrl284683w47qpvxz8u",
            name: "Mert Exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
