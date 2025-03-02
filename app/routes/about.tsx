export async function loader() {
  return new Response("About");
}

export async function action() {}

export default function About() {
  return <div className="btn">About</div>;
}
