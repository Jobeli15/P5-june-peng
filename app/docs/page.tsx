import ConfettiButton from "@/components/confettiButton";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>More!</h1>

      <div className="my-20">
        <span className="text-2xl mr-6">I like this Gif 🔽</span>{" "}
      <img src="https://i.pinimg.com/originals/bb/4d/55/bb4d55e7d0d6b8ab9ad538a5bdb237b6.gif" alt="https://i.pinimg.com/originals/bb/4d/55/bb4d55e7d0d6b8ab9ad538a5bdb237b6.gif" />
      </div>

      <div className="flex gap-4">
        <ConfettiButton />
      <img src="https://media.tenor.com/xRUyVITjrl0AAAAM/cute-pokemon.gif" alt="https://media.tenor.com/xRUyVITjrl0AAAAM/cute-pokemon.gif" />
      </div>
    </div>
  );
}
