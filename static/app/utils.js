module.exports = {
    plural(quant, forms) {
        return forms[
            (quant % 10 === 1 && quant % 100 !== 11)
                ? 0
                : (quant % 10 >= 2 && quant % 10 <= 4 && (quant % 100 < 10 || quant % 100 >= 20))
                    ? 1
                    : 2
        ];
    },

    getTimeText(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();

        hours = hours < 10 ? `0${hours}` : `${hours}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        return `${hours}:${minutes}`;
    },

    getDateText(date) {
        const months = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
        ];

        const month = date.getUTCMonth();
        const day = date.getUTCDate();

        return `${day} ${months[month]}`;
    },
};
