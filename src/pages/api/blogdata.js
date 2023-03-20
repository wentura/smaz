export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "title1",
      description: "decs1",
    },
    {
      id: 2,
      name: "title2",
      description: "decs2",
    },
  ]);
}
