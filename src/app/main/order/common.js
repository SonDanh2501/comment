import { orderStatusArray } from "./model/status";
import React from "react";

export const keyStore = "orders"
export const keyI18n = "i18nOrder"

export const btnStatus = [
    {
        status: 2,
        name: "Xác nhận"
    },
    {
        status: 6,
        name: "Đóng gói"
    },
    {
        status: 5,
        name: "Chờ thanh toán"
    },
    {
        status: 3,
        name: "Xác nhận thanh toán"
    },
    {
        status: 4,
        name: "Hoàn thành"
    },
    {
        status: 0,
        name: "Hủy"
    },
];

export const shipStatus = {
    1: {
        status: 1,
        name: 'Chờ lấy hàng',
        className: 'bg-orange-500'
    },
    2: {
        status: 2,
        name: 'Đã lấy hàng',
        className: 'bg-blue-500'
    },
    3: {
        status: 3,
        name: 'Đang giao',
        className: 'bg-green-500'
    },
    5: {
        status: 5,
        name: 'Hoàn thành',
        className: 'bg-green-900'
    }
}

export const links = (valueOb) => orderStatusArray.map(val => (
    {
        id: val.id, name: val.name, link: "/order/" + val.id, otherComp: <div className={val.className} style={{
            position: 'relative',
            top: 8,
            padding: '0 5px',
            borderRadius: 5,
            color: 'white'
        }}>{valueOb[val.id]}</div>
    }
));

export const deliveryLink = (id) => [
    { id: 1, name: "Sản phẩm", link: `/order/delivery/1/${id}`, icon: "" },
    { id: 2, name: "Đơn hàng", link: `/order/delivery/2/${id}`, icon: "" },
];

export function playMusic() {
    var audio = new Audio('assets/upload/correct.mp3');
    audio.play();
}

export function playMusicW() {
    var audio = new Audio('assets/upload/wrong.wav');
    audio.play();
}