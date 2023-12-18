// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useSearchParams } from 'react-router-dom'
// import { Box } from '@mui/material'
//
// const [searchParams] = useSearchParams()
//
// const [otvet, setOtvet] = useState(false)
// const [textOtvet, setTextOtvet] = useState({})
//
// useEffect(() => {
//   axios
//     .get(
//       `https://pay.pay-ok.org/demo/?REQ={"PAY_ID":"${searchParams.get('id')}","PAY_ACTION":"GET_INFO"}`,
//     )
//     .then((response) => {
//       const otvet = response.data;
//       setOtvet(true);
//       otvet.STATUS.params.OD_PARAMS = JSON.parse(otvet.STATUS.params.OD_PARAMS);
//       setTextOtvet(otvet.STATUS.params);
//       console.log(otvet);
//       console.log(textOtvet);
//     })
//     .catch((error) => {
//       console.error('Ошибка при выполнении запроса:', error);
//       // обработка ошибки
//     });
// }, [searchParams]);
//
// export default function Review() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Order summary
//       </Typography>
//       {otvet && textOtvet && (
//       <Box>
//         <p>Id : {textOtvet.OD_PARAMS.id}</p>
//         <table className="bill-details">
//           <tbody>
//           <tr>
//             <td>
//               Дата : <span>{textOtvet.OD_TIMESTAMP.slice(0, 10)}</span>
//             </td>
//             <td>
//               Время : <span>{textOtvet.OD_TIMESTAMP.slice(10)}</span>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               Личный счет:
//               <span> {textOtvet.lsc}</span>
//             </td>
//             <td>
//               Почта : <span>{textOtvet.contacts}</span>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               Фискальный номер:
//               <span> {textOtvet.OD_PARAMS.fsNumber}</span>
//             </td>
//             <td>
//               ОФД:{' '}
//               <span>
//                     {textOtvet.OD_PARAMS.ofdName}(
//                 {textOtvet.OD_PARAMS.ofdWebsite})
//                   </span>
//             </td>
//           </tr>
//           <tr>
//             <th className="center-align" colSpan={2}>
//               <span className="receipt">Фискальный чек</span>
//             </th>
//           </tr>
//           <tr>
//             <th className="center-align" colSpan={2}>
//                   <span className="receipt">
//                     СМЕНА №{textOtvet.OD_PARAMS.shiftNumber} ЧЕК №
//                     {textOtvet.OD_PARAMS.documentIndex} ФД №
//                     {textOtvet.OD_PARAMS.documentNumber}
//                   </span>
//             </th>
//           </tr>
//           </tbody>
//         </table>
//
//         <table className="items">
//           <thead>
//           <tr>
//             <th className="heading name">Товар</th>
//             <th className="heading qty">Кол-во</th>
//             <th className="heading rate">Цена</th>
//           </tr>
//           </thead>
//
//           <tbody>
//           <tr>
//             <td>
//               {textOtvet.positions.slice(
//                 textOtvet.positions.indexOf('PAY_NAME') + 15,
//                 -4,
//               )}
//             </td>
//             <td>
//               {textOtvet.positions.slice(
//                 textOtvet.positions.indexOf('PAY_COUNT') + 13,
//                 textOtvet.positions.indexOf('PAY_COUNT') + 14,
//               )}
//             </td>
//             <td className="price">
//               {textOtvet.positions.slice(
//                 textOtvet.positions.indexOf('PAY_PRICE') + 13,
//                 textOtvet.positions.indexOf(';', textOtvet.positions.indexOf('PAY_PRICE') + 13),
//               )}
//             </td>
//           </tr>
//           <tr>
//             <th colSpan={2} className="total text">
//               Total
//             </th>
//             <th className="total price">
//               {textOtvet.positions.slice(
//                 textOtvet.positions.indexOf('PAY_PRICE') + 13,
//                 textOtvet.positions.indexOf(';', textOtvet.positions.indexOf('PAY_PRICE') + 13),
//               )}
//             </th>
//           </tr>
//           </tbody>
//         </table>
//       </Box>
//       )}
//     </React.Fragment>
//   );
// }