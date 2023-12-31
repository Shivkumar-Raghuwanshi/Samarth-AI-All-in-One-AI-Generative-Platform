import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image src="/loader.png" alt="Logo" fill />
      </div>
      <p className="text-sm text-muted-foreground">
        Samarth AI is thinking ...
      </p>
    </div>
  );
};

export default Loader;
