const express = require('express');
const router = express.Router();

const creditData = {
    10001: {
        "fecha_creacion_credito": "30-ago-2018",
        "fecha_vencimiento_credito": "24-sep-2018",
        "Estado": "A",
        "monto_credito_total": 1.250,
        "tipo_credito": "Consumo",
        "cuenta_abono": 12345,
        "moneda": "Pesos CLP",
        "medio_pago": "abono a cuenta corriente",
        "saldo_capital_vigente": 1.250,
        "capital_vencido": 1.250,
        "interes_adeudado": 1.250,
        "interes_mora": 1.250,
        "intereses_vigentes": 1.250,
        "comision_pepago": 1.250,
        "honorario_cobranza": 1.250,
        "total_a_pagar": 1.250,
        "fecha_renov_credito": "27-NOV-2018",
        "monto_original_capital": 1.250,
        "monto_a_renovar": 1.250,
        "saldo_insoluto_capital_adeudado": 1.250,
        "fecha_fin_devengacion_intereses": "27-DIC-2018",
        "nueva_tasa_interes": 1.250
    },
    10002: {
        "fecha_creacion_credito": "30-ago-2018",
        "fecha_vencimiento_credito": "24-sep-2018",
        "Estado": "L",
        "monto_credito_total": 1.250,
        "tipo_credito": "Comercial",
        "cuenta_abono": 541535,
        "moneda": "Dólar USD",
        "medio_pago": "retiro en sucursal",
        "saldo_capital_vigente": 1.250,
        "capital_vencido": 1.250,
        "interes_adeudado": 1.250,
        "interes_mora": 1.250,
        "intereses_vigentes": 1.250,
        "comision_pepago": 1.250,
        "honorario_cobranza": 1.250,
        "total_a_pagar": 1.250,
        "fecha_renov_credito": "27-NOV-2018",
        "monto_original_capital": 1.250,
        "monto_a_renovar": 1.250,
        "saldo_insoluto_capital_adeudado": 1.250,
        "fecha_fin_devengacion_intereses": "27-DIC-2018",
        "nueva_tasa_interes": 1.250
    },
    10003: {
        "fecha_creacion_credito": "30-ago-2018",
        "fecha_vencimiento_credito": "24-sep-2018",
        "Estado": "A",
        "monto_credito_total": 1.250,
        "tipo_credito": "Renegociado",
        "cuenta_abono": 241213,
        "moneda": "Euro EUR",
        "medio_pago": "retiro en sucursal",
        "saldo_capital_vigente": 1.250,
        "capital_vencido": 1.250,
        "interes_adeudado": 1.250,
        "interes_mora": 1.250,
        "intereses_vigentes": 1.250,
        "comision_pepago": 1.250,
        "honorario_cobranza": 1.250,
        "total_a_pagar": 1.250,
        "fecha_renov_credito": "27-NOV-2018",
        "monto_original_capital": 1.250,
        "monto_a_renovar": 1.250,
        "saldo_insoluto_capital_adeudado": 1.250,
        "fecha_fin_devengacion_intereses": "27-DIC-2018",
        "nueva_tasa_interes": 1.250
    },
    10004: {
        "fecha_creacion_credito": "30-ago-2018",
        "fecha_vencimiento_credito": "24-sep-2018",
        "Estado": "V",
        "monto_credito_total": 1.250,
        "tipo_credito": "Fogape",
        "cuenta_abono": 11234415,
        "moneda": "Pesos CLP",
        "medio_pago": "cuenta varios acreedores",
        "saldo_capital_vigente": 1.250,
        "capital_vencido": 1.250,
        "interes_adeudado": 1.250,
        "interes_mora": 1.250,
        "intereses_vigentes": 1.250,
        "comision_pepago": 1.250,
        "honorario_cobranza": 1.250,
        "total_a_pagar": 1.250,
        "fecha_renov_credito": "27-NOV-2018",
        "monto_original_capital": 1.250,
        "monto_a_renovar": 1.250,
        "saldo_insoluto_capital_adeudado": 1.250,
        "fecha_fin_devengacion_intereses": "27-DIC-2018",
        "nueva_tasa_interes": 1.250
    },
    10005: {
        "fecha_creacion_credito": "30-ago-2018",
        "fecha_vencimiento_credito": "24-sep-2018",
        "Estado": "A",
        "monto_credito_total": 1.250,
        "tipo_credito": "Consumo",
        "cuenta_abono": 777888333,
        "moneda": "Dólar USD",
        "medio_pago": "retiro en sucursal",
        "saldo_capital_vigente": 1.250,
        "capital_vencido": 1.250,
        "interes_adeudado": 1.250,
        "interes_mora": 1.250,
        "intereses_vigentes": 1.250,
        "comision_pepago": 1.250,
        "honorario_cobranza": 1.250,
        "total_a_pagar": 1.250,
        "fecha_renov_credito": "27-NOV-2018",
        "monto_original_capital": 1.250,
        "monto_a_renovar": 1.250,
        "saldo_insoluto_capital_adeudado": 1.250,
        "fecha_fin_devengacion_intereses": "27-DIC-2018",
        "nueva_tasa_interes": 1.250
    },
};


const getAllCreditNumbers = () => {
    return creditData;
};

// const getCreditData = (creditNumber) => {
//     return creditData[creditNumber] || 'Credit number not found';
// };

router.get('/', function(req, res, next) {
    const creditNumbers = getAllCreditNumbers();
    res.json(creditNumbers);
});

router.post('/', (req, res) => {
    const rutCliente = req.body.rutCliente;

    if (rutCliente === "1111111111-1") {
        // Devuelve un conjunto de datos específico
        res.json(

            {
                "codigoRespuesta": "00",
                "glosaRespuesta": "Exito",
                "respuesta": {
                    "listaCreditos": {
                        "credito": [
                            {
                                "numeroCreditoCore": "1",
                                "oficina": "000",
                                "numeroProducto": "000931290002000976",
                                "producto": "9202",
                                "descripcionProducto": "9202",
                                "estado": "H",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 9,
                                "estadoCredito": "WOFF",
                                "numeroSecuenciaEvento": 1704,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 1.5E9,
                                "montoLiquido": 1.5E9,
                                "tipoCambio": 1.0,
                                "fechaValor": "2014-01-28T00:00:00.000+00:00",
                                "fechaVencimiento": "2017-10-10T00:00:00.000+00:00",
                                "fechaBook": "2014-01-29T00:00:00.000+00:00",
                                "fechaOrigen": "2014-01-28T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 12.0,
                                "fechaMinimaVencidaNoPago": "2017-03-08T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "57",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 2.504635037E9,
                                            "fechaValor": "2017-10-10T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2014-10-08T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 2.775000042E10,
                                            "fechaValor": "2017-10-10T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 2.6583333604E10,
                                            "fechaValor": "2017-02-08T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "2",
                                "oficina": "000",
                                "numeroProducto": "000931290002002481",
                                "producto": "9201",
                                "descripcionProducto": "9201",
                                "estado": "H",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 9,
                                "estadoCredito": "WOFF",
                                "numeroSecuenciaEvento": 1010,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 1.9736E9,
                                "montoLiquido": 1.9736E9,
                                "tipoCambio": 1.0,
                                "fechaValor": "2016-12-26T00:00:00.000+00:00",
                                "fechaVencimiento": "2017-01-25T00:00:00.000+00:00",
                                "fechaBook": "2016-02-01T00:00:00.000+00:00",
                                "fechaOrigen": "2016-01-29T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "Y",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 12.0,
                                "fechaMinimaVencidaNoPago": "2017-01-25T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "2",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128805",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 6710240.0,
                                            "fechaValor": "2017-01-25T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2016-12-26T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 1.9736E9,
                                            "fechaValor": "2017-01-25T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 1.9736E9,
                                            "fechaValor": "2016-12-26T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "3",
                                "oficina": "000",
                                "numeroProducto": "000931290002002491",
                                "producto": "9201",
                                "descripcionProducto": "9201",
                                "estado": "H",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 5,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 158,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 7.011E8,
                                "montoLiquido": 7.011E8,
                                "tipoCambio": 1.0,
                                "fechaValor": "2016-06-06T00:00:00.000+00:00",
                                "fechaVencimiento": "2016-09-02T00:00:00.000+00:00",
                                "fechaBook": "2016-02-04T00:00:00.000+00:00",
                                "fechaOrigen": "2016-02-04T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "Y",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 7.0,
                                "fechaMinimaVencidaNoPago": null,
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "4",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128805",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 7403616.0,
                                            "fechaValor": "2016-09-02T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2016-06-06T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 7.011E8,
                                            "fechaValor": "2016-09-02T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 7.011E8,
                                            "fechaValor": "2016-09-02T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "4",
                                "oficina": "000",
                                "numeroProducto": "000931290002002874",
                                "producto": "9201",
                                "descripcionProducto": "9201",
                                "estado": "L",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 1,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 66,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 1.2E9,
                                "montoLiquido": 1.2E9,
                                "tipoCambio": 1.0,
                                "fechaValor": "2016-07-01T00:00:00.000+00:00",
                                "fechaVencimiento": "2016-09-29T00:00:00.000+00:00",
                                "fechaBook": "2016-07-01T00:00:00.000+00:00",
                                "fechaOrigen": "2016-07-01T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "Y",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 3.0,
                                "fechaMinimaVencidaNoPago": null,
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "4",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128805",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 1.26E7,
                                            "fechaValor": "2016-09-29T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2016-07-01T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 1.2E9,
                                            "fechaValor": "2016-09-29T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 1.2E9,
                                            "fechaValor": "2016-09-29T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "5",
                                "oficina": "000",
                                "numeroProducto": "000931290002003122",
                                "producto": "9201",
                                "descripcionProducto": "9201",
                                "estado": "L",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 1,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 23,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 1.3E9,
                                "montoLiquido": 1.3E9,
                                "tipoCambio": 1.0,
                                "fechaValor": "2016-11-03T00:00:00.000+00:00",
                                "fechaVencimiento": "2016-12-02T00:00:00.000+00:00",
                                "fechaBook": "2016-11-03T00:00:00.000+00:00",
                                "fechaOrigen": "2016-11-03T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 1.0,
                                "fechaMinimaVencidaNoPago": null,
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "4",
                                "montoTotalCondonado": "286000",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128805",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 3861000.0,
                                            "fechaValor": "2016-12-02T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2016-11-03T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 1.3E9,
                                            "fechaValor": "2016-12-02T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 1.3E9,
                                            "fechaValor": "2016-11-30T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "6",
                                "oficina": "000",
                                "numeroProducto": "000931290002000830",
                                "producto": "9202",
                                "descripcionProducto": "9202",
                                "estado": "H",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 8,
                                "estadoCredito": "WOFF",
                                "numeroSecuenciaEvento": 1745,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 1.0E9,
                                "montoLiquido": 1.0E9,
                                "tipoCambio": 1.0,
                                "fechaValor": "2014-10-08T00:00:00.000+00:00",
                                "fechaVencimiento": "2017-10-10T00:00:00.000+00:00",
                                "fechaBook": "2013-11-28T00:00:00.000+00:00",
                                "fechaOrigen": "2013-11-28T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 12.0,
                                "fechaMinimaVencidaNoPago": "2017-03-08T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "57",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 1.669756743E9,
                                            "fechaValor": "2017-10-10T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2014-10-08T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 1.850000049E10,
                                            "fechaValor": "2017-10-10T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 1.7722222538E10,
                                            "fechaValor": "2017-02-08T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "7",
                                "oficina": "000",
                                "numeroProducto": "000931290002003195",
                                "producto": "9201",
                                "descripcionProducto": "9201",
                                "estado": "A",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 801,
                                "estadoCredito": "WOFF",
                                "numeroSecuenciaEvento": 2686,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 2.0E9,
                                "montoLiquido": 2.0E9,
                                "tipoCambio": 1.0,
                                "fechaValor": "2016-12-12T00:00:00.000+00:00",
                                "fechaVencimiento": "2017-01-11T00:00:00.000+00:00",
                                "fechaBook": "2016-12-12T00:00:00.000+00:00",
                                "fechaOrigen": "2016-12-12T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "Y",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 1.0,
                                "fechaMinimaVencidaNoPago": "2017-01-11T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "1",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 6600000.0,
                                            "fechaValor": "2017-01-11T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2016-12-12T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 2.0E9,
                                            "fechaValor": "2017-01-11T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 2.0E9,
                                            "fechaValor": "2016-12-12T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "8",
                                "oficina": "000",
                                "numeroProducto": "000931290002000894",
                                "producto": "9202",
                                "descripcionProducto": "9202",
                                "estado": "H",
                                "categoriaProducto": "COMERCIAL",
                                "numeroVersion": 5,
                                "estadoCredito": "WOFF",
                                "numeroSecuenciaEvento": 1724,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 1.0E9,
                                "montoLiquido": 1.0E9,
                                "tipoCambio": 1.0,
                                "fechaValor": "2014-10-08T00:00:00.000+00:00",
                                "fechaVencimiento": "2017-10-10T00:00:00.000+00:00",
                                "fechaBook": "2013-12-23T00:00:00.000+00:00",
                                "fechaOrigen": "2013-12-23T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "10",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 12.0,
                                "fechaMinimaVencidaNoPago": "2017-03-08T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "58",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128805",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 1.669756743E9,
                                            "fechaValor": "2017-10-10T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0.0,
                                            "fechaValor": "2014-10-08T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 1.850000049E10,
                                            "fechaValor": "2017-10-10T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 1.7722222538E10,
                                            "fechaValor": "2017-02-08T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            }
            )
    } else if (rutCliente === "1111111111-2") {
        // Devuelve otro conjunto de datos específico
        res.json(

            {
                "codigoRespuesta": "00",
                "glosaRespuesta": "Exito",
                "respuesta": {
                    "listaCreditos": {
                        "credito": [
                            {
                                "numeroCreditoCore": "9",
                                "oficina": "000",
                                "numeroProducto": "000931290002000605",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "V",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 2,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 8,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 12748362,
                                "montoLiquido": 12748362,
                                "tipoCambio": 1,
                                "fechaValor": "2014-01-21T00:00:00.000+00:00",
                                "fechaVencimiento": "2018-09-11T00:00:00.000+00:00",
                                "fechaBook": "2014-01-21T00:00:00.000+00:00",
                                "fechaOrigen": "2014-01-21T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "Y",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 12,
                                "fechaMinimaVencidaNoPago": "2014-07-21T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "2",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128805",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 1737145,
                                            "fechaValor": "2018-09-11T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2014-01-21T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 12748362,
                                            "fechaValor": "2018-09-11T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 12748362,
                                            "fechaValor": "2014-01-21T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "10",
                                "oficina": "000",
                                "numeroProducto": "000931290002016871",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "H",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 1,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 13,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 5009,
                                "montoLiquido": 5009,
                                "tipoCambio": 1,
                                "fechaValor": "2021-08-20T00:00:00.000+00:00",
                                "fechaVencimiento": "2021-09-20T00:00:00.000+00:00",
                                "fechaBook": "2021-08-20T00:00:00.000+00:00",
                                "fechaOrigen": "2021-08-20T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 1,
                                "fechaMinimaVencidaNoPago": "2021-09-20T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "1",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128010",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 11,
                                            "fechaValor": "2021-09-20T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2021-08-20T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 5009,
                                            "fechaValor": "2021-09-20T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 5009,
                                            "fechaValor": "2021-08-20T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "11",
                                "oficina": "000",
                                "numeroProducto": "000931290002016880",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "H",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 1,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 12,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 6001,
                                "montoLiquido": 6001,
                                "tipoCambio": 1,
                                "fechaValor": "2021-08-23T00:00:00.000+00:00",
                                "fechaVencimiento": "2021-09-23T00:00:00.000+00:00",
                                "fechaBook": "2021-08-23T00:00:00.000+00:00",
                                "fechaOrigen": "2021-08-23T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 1,
                                "fechaMinimaVencidaNoPago": "2021-09-23T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "1",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128805",
                                "cuentaProductoCredito": "000005128805",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 13,
                                            "fechaValor": "2021-09-23T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2021-08-23T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 6001,
                                            "fechaValor": "2021-09-23T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 6001,
                                            "fechaValor": "2021-08-23T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "12",
                                "oficina": "000",
                                "numeroProducto": "000931290002017023",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "H",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 2,
                                "estadoCredito": "NRMI",
                                "numeroSecuenciaEvento": 195,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 445454,
                                "montoLiquido": 445454,
                                "tipoCambio": 1,
                                "fechaValor": "2021-09-29T00:00:00.000+00:00",
                                "fechaVencimiento": "2022-03-31T00:00:00.000+00:00",
                                "fechaBook": "2021-09-29T00:00:00.000+00:00",
                                "fechaOrigen": "2021-09-29T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 7,
                                "fechaMinimaVencidaNoPago": "2022-03-31T00:00:00.000+00:00",
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "3",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128010",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 7635,
                                            "fechaValor": "2022-03-31T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2021-09-29T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 445454,
                                            "fechaValor": "2022-03-31T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 445454,
                                            "fechaValor": "2021-09-29T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "13",
                                "oficina": "000",
                                "numeroProducto": "000931290002017024",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "L",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 1,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 23,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 314059,
                                "montoLiquido": 314059,
                                "tipoCambio": 1,
                                "fechaValor": "2021-09-29T00:00:00.000+00:00",
                                "fechaVencimiento": "2021-10-22T00:00:00.000+00:00",
                                "fechaBook": "2021-09-29T00:00:00.000+00:00",
                                "fechaOrigen": "2021-09-29T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 1,
                                "fechaMinimaVencidaNoPago": null,
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "4",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128010",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 281,
                                            "fechaValor": "2021-10-22T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2021-09-29T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 314059,
                                            "fechaValor": "2021-10-22T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 314059,
                                            "fechaValor": "2021-10-22T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "14",
                                "oficina": "000",
                                "numeroProducto": "000931290002017027",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "L",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 2,
                                "estadoCredito": "NRMI",
                                "numeroSecuenciaEvento": 27,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 20000,
                                "montoLiquido": 20000,
                                "tipoCambio": 1,
                                "fechaValor": "2021-09-30T00:00:00.000+00:00",
                                "fechaVencimiento": "2021-11-02T00:00:00.000+00:00",
                                "fechaBook": "2021-09-30T00:00:00.000+00:00",
                                "fechaOrigen": "2021-09-30T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 2,
                                "fechaMinimaVencidaNoPago": null,
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "4",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128010",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 46,
                                            "fechaValor": "2021-11-02T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2021-09-30T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 20000,
                                            "fechaValor": "2021-11-02T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 20000,
                                            "fechaValor": "2021-11-02T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "15",
                                "oficina": "000",
                                "numeroProducto": "000931290002017032",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "H",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 2,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 15,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 215474,
                                "montoLiquido": 215474,
                                "tipoCambio": 1,
                                "fechaValor": "2021-10-01T00:00:00.000+00:00",
                                "fechaVencimiento": "2021-10-18T00:00:00.000+00:00",
                                "fechaBook": "2021-10-01T00:00:00.000+00:00",
                                "fechaOrigen": "2021-10-01T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 1,
                                "fechaMinimaVencidaNoPago": null,
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "3",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128010",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 254,
                                            "fechaValor": "2021-10-18T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2021-10-01T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 215474,
                                            "fechaValor": "2021-10-18T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 215474,
                                            "fechaValor": "2021-10-18T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            },
                            {
                                "numeroCreditoCore": "16",
                                "oficina": "000",
                                "numeroProducto": "000931290002017139",
                                "producto": "9206",
                                "descripcionProducto": "9206",
                                "estado": "L",
                                "categoriaProducto": "BOLETAS",
                                "numeroVersion": 1,
                                "estadoCredito": "NORM",
                                "numeroSecuenciaEvento": 8,
                                "rutCliente": "93129000-2",
                                "nombreCliente": "COLCHONES ROSEN S.A.I.C.",
                                "moneda": "CLP",
                                "glosaMoneda": "CLP",
                                "montoBruto": 15421474,
                                "montoLiquido": 15421474,
                                "tipoCambio": 1,
                                "fechaValor": "2021-10-18T00:00:00.000+00:00",
                                "fechaVencimiento": "2021-10-22T00:00:00.000+00:00",
                                "fechaBook": "2021-10-18T00:00:00.000+00:00",
                                "fechaOrigen": "2021-10-18T00:00:00.000+00:00",
                                "cuponera": "N",
                                "flagEnmienda": "N",
                                "facilidadATM": "N",
                                "passBook": "N",
                                "indicadorLiquidate": "N",
                                "autoliquidacion": "A",
                                "reversaPagoAutoliquidado": "N",
                                "liquidacionParcial": "N",
                                "autoliquidacionRetries": "0",
                                "trackReceivable": "N",
                                "pagoManualTrackReceivable": "N",
                                "udeRollover": "C",
                                "montoEspecial": "0",
                                "scheduleBasis": "C",
                                "estadoAutorizado": "A",
                                "impuestoMensualMaximo": 1,
                                "fechaMinimaVencidaNoPago": null,
                                "modoRollover": "M",
                                "tipoRollover": "P",
                                "indicadorAvisoVencimiento": "N",
                                "contadorRollover": "0",
                                "contadorCuotaPagada": "4",
                                "montoTotalCondonado": "0",
                                "fechaProximoVencimiento": null,
                                "modoPagoDebito": "ACC",
                                "modoPagoCredito": "ACC",
                                "oficinaCuentaDebito": "000",
                                "oficinaCuentaCredito": "000",
                                "cuentaProductoDebito": "000005128010",
                                "cuentaProductoCredito": "000005128010",
                                "transaccionCutOff": "N",
                                "listaComponentes": {
                                    "componente": [
                                        {
                                            "nombreComponente": "MAIN_INT_EXPECTED",
                                            "balanceComponente": 1885,
                                            "fechaValor": "2021-10-22T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "MAIN_INT_OUTSTAND",
                                            "balanceComponente": 0,
                                            "fechaValor": "2021-10-18T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_EXPECTED",
                                            "balanceComponente": 15421474,
                                            "fechaValor": "2021-10-22T00:00:00.000+00:00"
                                        },
                                        {
                                            "nombreComponente": "PRINCIPAL_OUTSTAND",
                                            "balanceComponente": 15421474,
                                            "fechaValor": "2021-10-22T00:00:00.000+00:00"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            });
    } else {
        // Rut no encontrado o no especificado
        res.status(400).json({
            error: 'Rut de cliente no encontrado o no válido'
        });
    }
});


// router.get('/:creditNumber', (req, res) => {
//     const creditNumber = req.params.creditNumber;
//     const data = getCreditData(creditNumber);
//     res.json(data);

// });

module.exports = { getAllCreditNumbers};
module.exports = router;
