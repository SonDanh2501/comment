import React, { useEffect, useMemo } from "react";
import { CmsBoxLine, CmsFormikAutocomplete, CmsFormikCheckbox, CmsFormikTextField } from "@widgets/components";
import { useDispatch, useSelector } from "react-redux";
import { keyStore } from "../../common";
import LocationContent from "./basic/LocationContent";
import { order } from "../../store/orderSlice";

export default function BasicInfoContent({ formik }) {
    const dispatch = useDispatch();
    const cusEntity = useSelector(store => store[keyStore].customer.entities)
    const payments = useSelector(store => store[keyStore].order.payments?.data) || []
    const cusData = useMemo(() => cusEntity?.data?.map(x => ({ ...x, id: x.id, name: `${x.phone ? x.phone + ', ' : ''}  ${x.name ? x.name + ', ' : ''} ${x.email ? x.email + ', ' : ''}`, cusName: x.name })) || [], [cusEntity])
    useEffect(() => {
        dispatch(order.other.getPayment())
    }, [dispatch])

    const HandleChangeCusId = (value) => {
        if (value) {
            const itemValue = {
                customerid: value.id,
                customername: value.cusName,
                customermoblie: value.phone,
                customeremail: value.email
            }
            formik.setValues({ ...formik.values, ...itemValue })
        }
    }

    return (
        <div className="w-full space-y-16 p-20 pb-40">
            <div className="w-full flex flex-wrap flex-row">
                <div className="w-full">
                    <CmsBoxLine label={'Thông tin khách hàng'}>
                        <div>
                            <CmsFormikCheckbox
                                formik={formik}
                                name="contractValid"
                                label='Là đối tác'
                            />
                        </div>
                        <div className="w-full flex flex-row space-x-8">
                            <div className="w-full space-y-8">
                                <CmsFormikAutocomplete
                                    onChangeValue={HandleChangeCusId}
                                    size="small"
                                    data={cusData}
                                    valueIsId
                                    formik={formik}
                                    name="customerid"
                                    label="Khách hàng" />
                                <CmsFormikTextField
                                    disabled
                                    size="small"
                                    required={false}
                                    formik={formik}
                                    name="customername"
                                    label="Tên khách hàng" />
                            </div>
                            <div className="w-full space-y-8">
                                <CmsFormikTextField
                                    disabled
                                    size="small"
                                    required={false}
                                    formik={formik}
                                    name="customermoblie"
                                    label="Điện thoại" />
                                <CmsFormikTextField
                                    disabled
                                    size="small"
                                    required={false}
                                    formik={formik}
                                    name="customeremail"
                                    label="Email" />
                            </div>
                        </div>
                    </CmsBoxLine>
                </div>
                <div className="w-full mt-16">
                    <LocationContent formik={formik} />
                </div>
            </div>
            <CmsBoxLine label={'Thông tin khác'}>
                <div className="w-full space-y-8">
                    {/* <CmsFormikAutocomplete valueIsId data={Object.values(orderType)} size="small" required={false} formik={formik} name="type" label="Cách thức mua hàng" />
                    <CmsFormikAutocomplete size="small" data={Object.values(orderAllowTest)} valueIsId formik={formik} name="allowtest" label="Allow Test" />
                    <CmsFormikTextField isNumberFormat endNode="VND" size="small" required={false} formik={formik} name="customershipfee" label="Phí ship" /> */}
                    {/* <CmsFormikTextField size="small" required={false} formik={formik} name="couponcode" label="Mã coupon" />
                    <CmsFormikTextField size="small" required={false} formik={formik} name="combo" label="Combo" />
                    <CmsFormikDateTimePicker isOpenKeyBoard={false} format="yyyy-MM-dd HH:mm:ss" size="small" required={false} formik={formik} name="deliverydate" label="Ngày giao hàng" /> */}
                    {/* <CmsFormikTextField isNumber endNode="%" size="small" required={false} formik={formik} name="discount" label="Giảm giá" />
                    <CmsFormikTextField isNumberFormat endNode="VND" size="small" required={false} formik={formik} name="moneydeposit" label="Tiền gửi" />
                    <CmsFormikTextField size="small" required={false} formik={formik} name="moneydepositaccount" label="Tài khoản tiền gửi" />
                    <CmsFormikTextField isNumberFormat endNode="VND" size="small" required={false} formik={formik} name="moneydiscount" label="Tiền Giảm giá" />
                    <CmsFormikTextField isNumberFormat endNode="VND" size="small" required={false} formik={formik} name="moneytransfer" label="Tiền chuyển khoản" />
                    <CmsFormikTextField size="small" required={false} formik={formik} name="moneytransferaccount" label="Tài khoản tiền chuyển khoản" />
                    <CmsFormikTextField size="small" required={false} formik={formik} name="paymentcode" label="Mã thanh toán" />
                    <CmsFormikTextField size="small" required={false} formik={formik} name="paymentgateway" label="Cổng thanh toán" /> */}
                    <CmsFormikAutocomplete
                        data={payments}
                        size="small"
                        required={false}
                        formik={formik}
                        name="paymentmethod"
                        autocompleteProps={{
                            getOptionLabel: (option) => option?.paymentname || '',
                            ChipProps: {
                                size: 'small'
                            },
                            size: 'small',
                        }}
                        setOption={(option) => option?.paymentname || ''}
                        label="Phương thức thanh toán"
                        valueIsId="paymentmethod" />
                    <CmsFormikTextField
                        size="small"
                        required={false}
                        formik={formik}
                        multiline={true}
                        rows={4}
                        name="description"
                        label="Mô tả" />
                    {/* <CmsFormikTextField endNode="điểm" size="small" required={false} formik={formik} name="usedpoints" label="Điểm dùng được" />
                    <CmsFormikTextField size="small" required={false} formik={formik} name="ref" label="giới thiệu" />
                    <CmsFormikTextField isNumberFormat endNode="VND" size="small" required={false} formik={formik} name="bonus" label="Tiền hoa hồng" /> */}
                </div>
            </CmsBoxLine>
            {/* <CmsSignature
                title="Chữ ký"
                setValue={(value) => formik.setFieldValue('signature', value)}
                value={formik?.values?.signature || ''}
                className={'w-full shadow-4'}
            /> */}
        </div>
    )
}