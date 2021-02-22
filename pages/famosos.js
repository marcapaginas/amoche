import { connectToDatabase } from "../util/mongodb";

export default function Famosos({ famosos }) {
  return (
    <div>
      <h1>Famosos moñecos</h1>
      <p>
        <small>por orden</small>
      </p>
      <ul>
        {famosos.map((famosos) => (
          <li class="p-2 bg-red-500  text-white m-1 rounded">
            <h2>{famosos.nombre} de profesion {famosos.profesion} y natural de {famosos.lugarNacimiento}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const famosos = await db
    .collection("famosos")
    .find({})
    .limit(20)
    .toArray();

  return {
    props: {
      famosos: JSON.parse(JSON.stringify(famosos)),
    },
  };
}