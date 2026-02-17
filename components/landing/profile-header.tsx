import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col font-geist-sans">
      <div className="flex items-center">
        <div>
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={50}
            height={50}
            quality={90}
            priority
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-medium">Ratnesh Chipre</h2>
          <p>Full-Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
