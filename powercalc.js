$(document).ready(function() {

    //// Карта России
    // Цвета зон
    var land = "#4f80bd",
        land2 = "#9aba58",
        land3 = "#ffff00",
        land4 = "#febf00",
        land5 = "#bf4f4d";

    // Выбранные зоны
    var zoneLand = "<div class='box__color' style='background-color: #4f80bd;'></div>Среднегодовой уровень инсоляции: до 3 кВт*ч/м<sup>2</sup>/сутки",
        zoneLand2 = "<div class='box__color' style='background-color: #9aba58;'></div>Среднегодовой уровень инсоляции: 3 - 3,5 кВт*ч/м<sup>2</sup>/сутки",
        zoneLand3 = "<div class='box__color' style='background-color: #ffff00;'></div>Среднегодовой уровень инсоляции: 3,5 - 4 кВт*ч/м<sup>2</sup>/сутки",
        zoneLand4 = "<div class='box__color' style='background-color: #febf00;'></div>Среднегодовой уровень инсоляции: 4 - 4,5 кВт*ч/м<sup>2</sup>/сутки",
        zoneLand5 = "<div class='box__color' style='background-color: #bf4f4d;'></div>Среднегодовой уровень инсоляции: 4,5 - 5 кВт*ч/м<sup>2</sup>/сутки";

    // Отрисовка карты
    var map = AmCharts.makeChart("chartdiv", {
        "type": "map",
        "pathToImages": "/img/",
        "dataProvider": {
            "mapURL": "/img/map.svg",
            "getAreasFromMap": true,
            "areas": [{
                    id: "RU-AD",
                    "color": land,
                    "description": zoneLand,
                    insolation: [4.25, 0.69, 0.90, 1.33, 37.80]
                },
                {
                    id: "RU-CR",
                    "color": land5,
                    "description": zoneLand5,
                    insolation: [4.14, 0.53, 0.76, 1.45, 43.20]
                },
                {
                    id: "RU-ALT",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [4.14, 0.53, 0.76, 1.45, 43.20]
                },
                {
                    id: "RU-AMU",
                    "color": land5,
                    "description": zoneLand5,
                    insolation: [4.28, 0.70, 0.79, 1.24, 44.40]
                },
                {
                    id: "RU-ARK",
                    "color": land,
                    "description": zoneLand,
                    insolation: [3.15, 0.38, 0.61, 1.64, 51.17]
                },
                {
                    id: "RU-AST",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [4.21, 0.58, 0.83, 1.39, 38.20]
                },
                {
                    id: "RU-BA",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.70, 0.54, 0.67, 1.45, 43.90]
                },
                {
                    id: "RU-BEL",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.75, 0.61, 0.77, 1.42, 40.60]
                },
                {
                    id: "RU-BRY",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.52, 0.60, 0.72, 1.42, 42.20]
                },
                {
                    id: "RU-BU",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.99, 0.52, 0.82, 1.49, 44.00]
                },
                {
                    id: "RU-CE",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.34, 0.69, 0.85, 1.33, 37.00]
                },
                {
                    id: "RU-CHE",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.83, 0.52, 0.74, 1.44, 44.40]
                },
                {
                    id: "RU-CHU",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.06, 0.33, 0.66, 1.69, 54.05]
                },
                {
                    id: "RU-CU",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.66, 0.49, 0.67, 1.53, 44.70]
                },
                {
                    id: "RU-DA",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.37, 0.64, 0.83, 1.39, 36.70]
                },
                {
                    id: "RU-AL",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [4.46, 0.66, 0.83, 1.31, 42.40]
                },
                {
                    id: "RU-IN",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.40, 0.72, 0.85, 1.31, 37.00]
                },
                {
                    id: "RU-IRK",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.75, 0.51, 0.69, 1.43, 46.80]
                },
                {
                    id: "RU-IVA",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.48, 0.48, 0.68, 1.53, 45.60]
                },
                {
                    id: "RU-KB",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.34, 0.83, 0.92, 1.18, 37.80]
                },
                {
                    id: "RU-KC",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.65, 0.79, 0.95, 1.20, 38.40]
                },
                {
                    id: "RU-KDA",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.02, 0.53, 0.87, 1.46, 36.40]
                },
                {
                    id: "RU-KEM",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.84, 0.56, 0.72, 1.45, 44.50]
                },
                {
                    id: "RU-KLU",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.36, 0.57, 0.67, 1.45, 43.10]
                },
                {
                    id: "RU-KHA",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.73, 0.62, 0.84, 1.37, 44.40]
                },
                {
                    id: "RU-KR",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.15, 0.37, 0.63, 1.60, 52.33]
                },
                {
                    id: "RU-KK",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.98, 0.57, 0.76, 1.39, 43.90]
                },
                {
                    id: "RU-KL",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [4.15, 0.58, 0.84, 1.40, 37.90]
                },
                {
                    id: "RU-KHM",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.28, 0.37, 0.66, 1.61, 54.88]
                },
                {
                    id: "RU-KGD",
                    "color": land,
                    "description": zoneLand,
                    insolation: [3.28, 0.50, 0.70, 1.52, 43.10]
                },
                {
                    id: "RU-KO",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.07, 0.34, 0.58, 1.64, 52.66]
                },
                {
                    id: "RU-KAM",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.62, 0.56, 0.75, 1.38, 45.30]
                },
                {
                    id: "RU-KRS",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.65, 0.62, 0.73, 1.42, 41.40]
                },
                {
                    id: "RU-KOS",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.40, 0.46, 0.64, 1.55, 47.20]
                },
                {
                    id: "RU-KGN",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.87, 0.49, 0.71, 1.49, 45.20]
                },
                {
                    id: "RU-KIR",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.42, 0.46, 0.63, 1.56, 47.30]
                },
                {
                    id: "RU-KYA",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.54, 0.47, 0.64, 1.51, 48.40]
                },
                {
                    id: "RU-LEN",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.41, 0.34, 0.66, 1.67, 48.80]
                },
                {
                    id: "RU-LIP",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.61, 0.60, 0.70, 1.42, 42.20]
                },
                {
                    id: "RU-MOW",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.47, 0.55, 0.68, 1.47, 44.60]
                },
                {
                    id: "RU-ME",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.57, 0.48, 0.66, 1.54, 45.70]
                },
                {
                    id: "RU-MAG",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.50, 0.33, 0.71, 1.56, 51.70]
                },
                {
                    id: "RU-MUR",
                    "color": land,
                    "description": zoneLand,
                    insolation: [2.76, 0.34, 0.64, 1.65, 47.67]
                },
                {
                    id: "RU-MO",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.67, 0.52, 0.68, 1.49, 43.70]
                },
                {
                    id: "RU-MOS",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.57, 0.53, 0.69, 1.48, 45.00]
                },
                {
                    id: "RU-NGR",
                    "color": land,
                    "description": zoneLand,
                    insolation: [3.29, 0.45, 0.65, 1.55, 46.70]
                },
                {
                    id: "RU-NEN",
                    "color": land,
                    "description": zoneLand,
                    insolation: [2.78, 0.32, 0.65, 1.70, 53.18]
                },
                {
                    id: "RU-SE",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.31, 0.77, 0.86, 1.26, 37.10]
                },
                {
                    id: "RU-NVS",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.89, 0.48, 0.72, 1.51, 45.10]
                },
                {
                    id: "RU-NIZ",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.55, 0.50, 0.66, 1.52, 45.40]
                },
                {
                    id: "RU-ORE",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.98, 0.53, 0.73, 1.46, 42.40]
                },
                {
                    id: "RU-ORL",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.60, 0.61, 0.70, 1.41, 42.40]
                },
                {
                    id: "RU-OMS",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.78, 0.47, 0.68, 1.51, 45.70]
                },
                {
                    id: "RU-PER",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.33, 0.44, 0.62, 1.56, 47.30]
                },
                {
                    id: "RU-PRI",
                    "color": land5,
                    "description": zoneLand5,
                    insolation: [4.47, 0.84, 0.84, 1.12, 37.70]
                },
                {
                    id: "RU-PSK",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.36, 0.45, 0.66, 1.55, 45.80]
                },
                {
                    id: "RU-PNZ",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.78, 0.52, 0.70, 1.49, 43.10]
                },
                {
                    id: "RU-ROS",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.00, 0.58, 0.82, 1.45, 38.30]
                },
                {
                    id: "RU-RYA",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.48, 0.57, 0.67, 1.44, 43.40]
                },
                {
                    id: "RU-SAM",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.94, 0.52, 0.71, 1.48, 43.60]
                },
                {
                    id: "RU-SA",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [3.21, 0.29, 0.67, 1.62, 54.90]
                },
                {
                    id: "RU-SAK",
                    "color": land5,
                    "description": zoneLand5,
                    insolation: [3.91, 0.69, 0.73, 1.28, 40.90]
                },
                {
                    id: "RU-SMO",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.35, 0.56, 0.68, 1.45, 43.70]
                },
                {
                    id: "RU-SPE",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.40, 0.42, 0.68, 1.56, 48.30]
                },
                {
                    id: "RU-SAR",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [4.12, 0.53, 0.74, 1.49, 42.00]
                },
                {
                    id: "RU-STA",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [4.22, 0.67, 0.85, 1.38, 38.30]
                },
                {
                    id: "RU-SVE",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.45, 0.47, 0.66, 1.51, 47.30]
                },
                {
                    id: "RU-TAM",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.90, 0.54, 0.72, 1.49, 42.80]
                },
                {
                    id: "RU-TOM",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.56, 0.45, 0.67, 1.56, 47.70]
                },
                {
                    id: "RU-TUL",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.56, 0.60, 0.69, 1.41, 43.00]
                },
                {
                    id: "RU-TA",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.69, 0.48, 0.67, 1.53, 44.90]
                },
                {
                    id: "RU-TY",
                    "color": land5,
                    "description": zoneLand5,
                    insolation: [4.35, 0.64, 0.82, 1.27, 42.70]
                },
                {
                    id: "RU-TVE",
                    "color": land,
                    "description": zoneLand,
                    insolation: [3.39, 0.47, 0.68, 1.53, 45.70]
                },
                {
                    id: "RU-TYU",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.72, 0.48, 0.69, 1.49, 47.00]
                },
                {
                    id: "RU-UD",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.47, 0.48, 0.63, 1.56, 46.00]
                },
                {
                    id: "RU-ULY",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.89, 0.53, 0.70, 1.49, 43.90]
                },
                {
                    id: "RU-VGG",
                    "color": land4,
                    "description": zoneLand4,
                    insolation: [4.03, 0.59, 0.79, 1.41, 40.30]
                },
                {
                    id: "RU-VLA",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.45, 0.47, 0.67, 1.54, 44.70]
                },
                {
                    id: "RU-YAN",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [2.59, 0.29, 0.68, 1.93, 53.56]
                },
                {
                    id: "RU-VLG",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.23, 0.41, 0.62, 1.59, 48.20]
                },
                {
                    id: "RU-VOR",
                    "color": land3,
                    "description": zoneLand3,
                    insolation: [3.73, 0.59, 0.72, 1.43, 41.10]
                },
                {
                    id: "RU-YAR",
                    "color": land2,
                    "description": zoneLand2,
                    insolation: [3.45, 0.48, 0.67, 1.53, 46.40]
                },
                {
                    id: "RU-YEV",
                    "color": land5,
                    "description": zoneLand5,
                    insolation: [4.40, 0.80, 0.85, 1.14, 39.90]
                },
                {
                    id: "RU-ZAB",
                    "color": land5,
                    "description": zoneLand5,
                    insolation: [4.30, 0.70, 0.81, 1.20, 44.60]
                }
            ],
            "selectable": true
        },
        "areasSettings": {
            "autoZoom": true,
            "selectedColor": "#cc0000",
            "descriptionWindowY": 430,
            "descriptionWindowX": 550,
            "descriptionWindowWidth": 280,
            "descriptionWindowHeight": 300
        },
        // "legend": {
        //     "width": 120,
        //     "marginRight": 27,
        //     "marginLeft": 27,
        //     "marginTop": 35,
        //     "equalWidths": true,
        //     "maxColumns": 1,
        //     "backgroundAlpha": 0.5,
        //     "backgroundColor": "#FFFFFF",
        //     "borderColor": "#ffffff",
        //     "borderAlpha": 1,
        //     "right": 0,
        //     "horizontalGap": 10,
        //     "switchable": true,
        //     data: [{
        //         title: "До 3",
        //         color: "#4f80bd"
        //     }, {
        //         title: "3 - 3,5",
        //         color: "#9aba58"
        //     }, {
        //         title: "3,5 - 4",
        //         color: "#ffff00"
        //     }, {
        //         title: "4 - 4,5",
        //         color: "#febf00"
        //     }, {
        //         title: "4,5 - 5",
        //         color: "#bf4f4d"
        //     }]
        // },
        // "listeners": [{
        //     "event": "drawn",
        //     "method": addLegendLabel
        // }]

    });

    

    //  CALCULATOR

    const firstPage = document.querySelector('#first_page');
    const lastPage = document.querySelector('#last_page');
    const totalWatt = document.querySelector('.consumers__total p span');
    const totalDay = document.querySelector('.consumers__totalDay p span');
    const totalPeak = document.querySelector('.consumers__totalPeak p span');
    const totalPower = document.querySelector('#total__power span');
    const totalDayPower = document.querySelector('#total__dayPower span');
    const totalPeakPower = document.querySelector('#total__peakPower span');
    const devices = document.querySelectorAll('.consumers .consumers__input');

    const availability = document.querySelector('#availability');
    const phases = document.querySelector('#phases');
    const whatwant = document.querySelector('#whatwant');
    const usage = document.querySelector('#usage');
    const offer = document.querySelector('#offer');

    const sendRegion = document.querySelector('input[name="region"]');
    const sendTotal = document.querySelector('input[name="totalwatt"]');
    const sendTotalDay = document.querySelector('input[name="totalwattday"]');
    const sendTotalPeak = document.querySelector('input[name="totalwattpeak"]');

    function getOffer () {
        if (availability.value == 'Нет') {
            offer.textContent = 'Автономная солнечная электростанция';
        } else if (availability.value == 'Да' && whatwant.value == 'Существенная экономия электроэнергии' ) {
            offer.textContent = 'Сетевая солнечная электростанция';
        } else if (availability.value == 'Да' && whatwant.value == 'Автономия' ) {
            offer.textContent = 'Автономная солнечная электростанция';
        } else if (availability.value == 'Да' && whatwant.value == 'Защита от отключений' ) {
            offer.textContent = 'ИБП или Гибридная солнечная электростанция';
        } else if (availability.value == 'Да' && whatwant.value == 'Защита от отключений + Экономия' ) {
            offer.textContent = 'Гибридная солнечная электростанция';
        }
    }

    //  total watt
    function getAllWatt () {
        const getChecked = [...devices].filter(input => input.checked);
        if (getChecked.length == 0 ) {
            totalWatt.textContent = 0;
        } else {
            var total = 0;
            getChecked.forEach(el => {
                total = (total + (Number(el.getAttribute('data-total'))));
                totalWatt.textContent = total;
            });
        }
    }
    function getAllWattDay () {
        const getChecked = [...devices].filter(input => input.checked);
        if (getChecked.length == 0 ) {
            totalDay.textContent = 0;
        } else {
            var total = 0;
            getChecked.forEach(el => {
                total = (total + (Number(el.getAttribute('data-watt-day-total'))));
                totalDay.textContent = total;
            });
        }
    }
    function getAllPeak () {
        const getChecked = [...devices].filter(input => input.checked);
        if (getChecked.length == 0 ) {
            totalPeak.textContent = 0;
        } else {
            var total = 0;
            getChecked.forEach(el => {
                total = (total + (Number(el.getAttribute('data-watt-peak-total'))));
                totalPeak.textContent = total;
            });
        }
    }

    // select consumers
    $('.consumers__item .wrapper').click(function(){
        var consumersInput = $(this).find('.consumers__input');
        var dataWatt = consumersInput.attr('data-watt');
        var dataWattDay = consumersInput.attr('data-watt-day');
        var dataWattPeak = consumersInput.attr('data-watt-peak');
        if (consumersInput.is(':checked')) {
            $(this).parent().find('.quantity').toggleClass('show');
            var currentQuantityValue = $(this).parent().find('.amount_input').val();
            consumersInput.attr('data-total', dataWatt * currentQuantityValue);
            consumersInput.attr('data-watt-peak-total', dataWattDay * currentQuantityValue);
            consumersInput.attr('data-watt-day-total', dataWattPeak * currentQuantityValue);
        }
        getAllWatt(currentQuantityValue);
        getAllWattDay(currentQuantityValue);
        getAllPeak(currentQuantityValue);
    });

    // keybord
    $('.amount_input').on('keyup', function(){
        var currentVal = parseInt($(this).val());
        if (currentVal) {
            var consumersInput = $(this).parent().parent().find('.consumers__input');
            var dataWatt = consumersInput.attr('data-watt');
            var dataWattDay = consumersInput.attr('data-watt-day');
            var dataWattPeak = consumersInput.attr('data-watt-peak');
            consumersInput.attr('data-total', (currentVal * dataWatt));
            consumersInput.attr('data-watt-peak-total', (currentVal * dataWattDay));
            consumersInput.attr('data-watt-day-total', (currentVal * dataWattPeak));
            getAllWatt();
            getAllWattDay();
            getAllPeak();
        }
    });
    // keybord alert
    $('.amount_input').on('input', function() {
        $(this).val($(this).val().replace(/^0|[^\d]/g, '').substr(0,2));
    });

    //  +
    $('.quantity__btn.up').click(function(e){
        var fieldName = $(this).parent().find('.amount_input');
        var consumersInput = $(this).parent().parent().find('.consumers__input');
        var dataWatt = consumersInput.attr('data-watt');
        var dataWattDay = consumersInput.attr('data-watt-day');
        var dataWattPeak = consumersInput.attr('data-watt-peak');
        var currentVal = parseInt(fieldName.val());
        var maxVal = parseInt(fieldName.attr('max'));
        var minVal = parseInt(fieldName.attr('min'));
        var increment = parseInt(fieldName.attr('step'));
        if (!isNaN(currentVal) && currentVal >= minVal && currentVal < maxVal) {
            // Increment
            fieldName.val(currentVal + increment);
            consumersInput.attr('data-total', (currentVal + increment) * dataWatt);
            consumersInput.attr('data-watt-day-total', (currentVal + increment) * dataWattDay);
            consumersInput.attr('data-watt-peak-total', (currentVal + increment) * dataWattPeak);
            getAllWatt();
            getAllWattDay();
            getAllPeak();
        } else {
            fieldName.val(currentVal);
        }
    });
    //  -
    $('.quantity__btn.down').click(function(e) {
        var fieldName = $(this).parent().find('.amount_input');
        var consumersInput = $(this).parent().parent().find('.consumers__input');
        var dataWatt = consumersInput.attr('data-watt');
        var dataWattDay = consumersInput.attr('data-watt-day');
        var dataWattPeak = consumersInput.attr('data-watt-peak');
        var currentVal = parseInt(fieldName.val());
        var maxVal = parseInt(fieldName.attr('max'));
        var minVal = parseInt(fieldName.attr('min'));
        var increment = parseInt(fieldName.attr('step'));
        if ($(this).parent().hasClass('show') && currentVal <= 1) {
           // Decrement one
           $(this).parent().removeClass('show');
           $(this).parent().parent().find('.consumers__input').prop('checked', false);
           $(this).parent().find('.amount_input').val(1);
           getAllWatt();
           getAllWattDay();
        getAllPeak();
        } else if (!isNaN(currentVal) && currentVal > minVal && currentVal <= maxVal) {
           fieldName.val(currentVal - increment);
           consumersInput.attr('data-total', (currentVal - increment) * dataWatt);
            consumersInput.attr('data-watt-day-total', (currentVal - increment) * dataWattDay);
            consumersInput.attr('data-watt-peak-total', (currentVal - increment) * dataWattPeak);
           getAllWatt();
           getAllWattDay();
           getAllPeak();
        } else {
            fieldName.val(currentVal);
        }
    });

    var regionFactor = [];
    var fragRegion;
    var nameRegion = '';
    map.addListener("clickMapObject", function(event) {
       regionFactor = event.mapObject.insolation;
       fragRegion = event.type;
       nameRegion = event.mapObject.enTitle;
    });


    $('.btn_calculate').click(function(e) {
        e.preventDefault();
        if (fragRegion == 'clickMapObject') {
            if ($('.consumers__total p span').html() > 0) {
                totalPower.textContent = totalWatt.textContent;
                totalDayPower.textContent = totalDay.textContent;
                totalPeakPower.textContent = totalPeak.textContent;
                getOffer();
                firstPage.style.display = 'none';
                lastPage.style.display = 'block';
                $('body,html').animate({scrollTop: 0}, 400);

                sendRegion.value = nameRegion
                sendTotal.value = $('.consumers__total p span').html();
                sendTotalDay.value = $('.consumers__totalDay p span').html();
                sendTotalPeak.value = $('.consumers__totalPeak p span').html();


            } else {
                alert('Укажите потребители');
            }
        } else {
            alert('Выберите регион');
        }
    });

    // mail sender
    $('form').submit(function(e){
        e.preventDefault();
        var th = $(this);
        var availability  = th.find('[name="availability"]').val();
        var phases        = th.find('[name="phases"]').val();
        var whatwant      = th.find('[name="whatwant"]').val();
        var usage         = th.find('[name="usage"]').val();
        var region        = th.find('[name="region"]').val();
        var totalwatt     = th.find('[name="totalwatt"]').val();
        var totalwattday  = th.find('[name="totalwattday"]').val();
        var totalwattpeak = th.find('[name="totalwattpeak"]').val();
        var name          = th.find('[name="name"]').val();
        var phone         = th.find('[name="phone"]').val();
        var email         = th.find('[name="email"]').val();
        var message       = th.find('[name="message"]').val();
        $.ajax({
            url: th.attr('action'),
            type: 'POST',
            processData: false,
            contentType: false,
            data: new FormData(this),
            beforeSend: function(data) {
                th.find('button[type="submit"]').attr('disabled', 'disabled');
                th.find('button[type="submit"]').text('Отправка...');
            },
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                if (data.includes('success')) {
                    const fancybox = Fancybox.show([
                    {
                        src: '#modal_thanks',
                    } 
                    ]);
                } else {
                    console.log("Статус: " + jqXHR.status + " " + jqXHR.statusText);
                }
            },
            error: function (jqXHR, text, error) { 
                alert(error);
            },
            complete: function(data) {
                setTimeout(function() {
                   th.trigger("reset");
                }, 1000);
                th.find('button[type="submit"]').prop('disabled', false);
                th.find('button[type="submit"]').text('Отправить');
            }
        });
    });
    



});


