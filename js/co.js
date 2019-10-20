document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
});
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
    today = dd + ' ' + mmmm + ',' + yyyy;
    document.getElementById('datepicker').value = today;

    $('.datepicker').datepicker({
        autoClose: true,
        format: 'dd mmm, yyyy',
        i18n: {
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
            weekdays: [
                'الأحد',
                'الإثنين',
                'الثلاثاء',
                'الأربعاء',
                'الخميس',
                'الجمعة',
                'السبت'
            ],
            weekdaysShort: [
                'الأحد',
                'الإثنين',
                'الثلاثاء',
                'الأربعاء',
                'الخميس',
                'الجمعة',
                'السبت'
            ],
            weekdaysAbbrev: [
                'اح',
                'إث',
                'ث',
                'أر',
                'خ',
                'ج',
                'س'
            ],
            cancel: 'إلغاء',
            done: 'حفظ'

        }
    });



});

// function nextMonth() {
//     $('#datepicker').datepicker({
//         onSelect: function () {
//             var n_date = $(this).datepicker('getDate'),
//                 day = date.getDate(),
//                 month = date.getMonth() + 2,
//                 year = date.getFullYear();
//             n_date = day + ' ' + month + ',' + year; 
//             document.getElementById('datepicker').value = n_date;

//         }
//     });
// }

