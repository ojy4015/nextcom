export default async function handler(req, res) {
  const { orderId, paymentKey, amount } = req.query;
  const secretKey = process.env.TOSS_SECRET_KEY;

  const url = "https://api.tosspayments.com/v1/payments/confirm";
  const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString("base64");

  await fetch(url, {
    method: "post",
    body: JSON.stringify({
      amount,
      orderId,
      paymentKey,
    }),
    headers: {
      Authorization: `Basic ${basicToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  // TODO: DB 처리
  // toss에서 전달받은 결제정보와 db에 저장된 결제정보가 같은지 유효성 검사 필요
  res.redirect(`/payments/complete?orderId=${orderId}`);
}
