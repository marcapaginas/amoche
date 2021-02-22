import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const famosos = await db
    .collection("famosos")
    .find({})
    .limit(20)
    .toArray();

  res.json(famosos);
};