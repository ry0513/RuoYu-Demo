new Vue({
    el: "#app",
    data: {
        activeCard: null, // 显示的卡片id
        cardList: [
            {
                id: 1,
                name: "中国工商银行",
                number: "6217 3456 8733 0732",
            },
            {
                id: 2,
                name: "中国建设银行",
                number: "6217 3456 8733 0732",
            },
            {
                id: 3,
                name: "中国农业银行",
                number: "6217 3456 8733 0732",
            },
            {
                id: 4,
                name: "中国银行",
                number: "6217 3456 8733 0732",
            },
            {
                id: 5,
                name: "交通银行",
                number: "6217 3456 8733 0732",
            },
            {
                id: 6,
                name: "中国邮政储蓄银行",
                number: "6217 3456 8733 0732",
            },
            {
                id: 7,
                name: "兴业银行",
                number: "6217 3456 8733 0732",
            },
            {
                id: 8,
                name: "招商银行",
                number: "6217 3456 8733 0732",
            },
        ],
    },
});
