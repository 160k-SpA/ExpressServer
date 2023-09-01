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

const getCreditData = (creditNumber) => {
    return creditData[creditNumber] || 'Credit number not found';
};

const getAllCreditNumbers = () => {
    return Object.keys(creditData);
};


router.get('/:creditNumber', (req, res) => {
    const creditNumber = req.params.creditNumber;
    const data = getCreditData(creditNumber);
    res.json(data);
});

router.get('/', function(req, res, next) {
    const creditNumbers = getAllCreditNumbers();
    res.json(creditNumbers);
});


module.exports = { getCreditData, getAllCreditNumbers };
module.exports = router;
