<template lang='pug'>
    footer.footer
        .footer__container.container 
            .footer__logo
                img.footer__logo-img(src="~img/footer-logo-img.png")

                .footer__logo-heading Офис компании находится по адресу:

                .footer__logo-address 100 International Drive MD <br/>Baltimore <br />Maryland, 21202 </br>USA

            .footer__doc
                .footer__doc-heading Сертификаты:

                ul.footer__doc-list.list
                    -for(var i = 1; i < 6; i++)
                        li.footer__doc-item
                            img.footer__doc-img(src="~img/footer/footer-" + i + '-img.png')

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>