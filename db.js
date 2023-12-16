const rests = [
    {
        id: 1,
        name: 'Greak House',
        description: 'Грецька кухня',
        dishs: [
            {
                id: 1,
                name: 'Класичний гірос',
                cost: 150,
            },
            {
                id: 2,
                name: 'Картопля легіонера',
                cost: 100,
            },
            {
                id: 3,
                name: 'Шаурма асорті',
                cost: 185,
            },
        ]
    },
     {
        id: 2,
        name: 'Sushi store',
        description: 'Кавказькі суші',
        dishs: [
            {
                id: 1,
                name: 'Філадельфія',
                cost: 220,
            },
            {
                id: 2,
                name: 'Суші місо-рамен з яловичиною',
                cost: 165,
            },
            {
                id: 3,
                name: 'Каліфорнія з копченим лососем',
                cost: 195,
            },
        ]
    },
    {
        id: 3,
        name: 'Мамина піпіська',
        description: 'Хотдожна, нетрадиційна(орієнтація)',
        dishs: [
            {
                id: 1,
                name: 'Хот-дог XXL з класичною сосискою у світлій булці',
                cost: 76,
            },
            {
                id: 2,
                name: 'Фермерський бургер',
                cost: 139,
            },
            {
                id: 3,
                name: 'Почіно XL',
                cost: 65,
            },
        ]
    },
]

const getRests = () => {
    return rests;
}

