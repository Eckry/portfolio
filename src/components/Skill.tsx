interface Props {
  name: string;
  icon: string
}

export default function Skill({ name, icon }: Props) {
  return <h1>{name}</h1>;
}
