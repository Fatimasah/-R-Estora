$(document).ready(function () {
    const monthNames = [
        'يناير',
        'فبراير',
        'مارس',
        'ابريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سيبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];
    var today = new Date();

    var dd = today.getDate();
    var mmmm = (monthNames[today.getMonth()]);
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    // today = mmmm + ' ' + dd + ',' + yyyy;
    today = yyyy + ' ' + ',' + mmmm + dd;
    document.getElementById('datepicker').value = today;


    $.fn.datepicker.dates['xx'] = {
        days: [
            'الأحد',
            'الإثنين',
            'الثلاثاء',
            'الأربعاء',
            'الخميس',
            'الجمعة',
            'السبت'],
        daysShort: [
            'الأحد',
            'الإثنين',
            'الثلاثاء',
            'الأربعاء',
            'الخميس',
            'الجمعة',
            'السبت'],
        daysMin: [
            'اح',
            'إث',
            'ث',
            'أر',
            'خ',
            'ج',
            'س'],
        months: [
            'يناير',
            'فبراير',
            'مارس',
            'ابريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سيبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر'
        ],
        monthsShort: [
            'يناير',
            'فبراير',
            'مارس',
            'ابريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سيبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر'
        ],
        today: "اليوم",
    };

    $('.datepicker').datepicker({
        autoclose: true,
        rtl: true,
        language: 'xx',
        format: 'yyyy, mm dd'
    });
    // next day
    $('.next-day').on("click", function () {
        var date = $('#datepicker').datepicker('getDate');
        date.setTime(date.getTime() + (1000 * 60 * 60 * 24))
        $('#datepicker').datepicker("setDate", date);
    });

    // prev day
    $('.prev-day').on("click", function () {
        var date = $('#datepicker').datepicker('getDate');
        date.setTime(date.getTime() - (1000 * 60 * 60 * 24))
        $('#datepicker').datepicker("setDate", date);
    });

    // next month
    $('.next-month').on("click", function () {
        var date = $('#datepicker').datepicker('getDate');
        date.setMonth(date.getMonth() + 1)
        $('#datepicker').datepicker("setDate", date);
    });

    // prev month
    $('.prev-month').on("click", function () {
        var date = $('#datepicker').datepicker('getDate');
        date.setMonth(date.getMonth() - 1)
        $('#datepicker').datepicker("setDate", date);
    });



});