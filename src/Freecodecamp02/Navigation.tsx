import { BsGithub, BsTwitter } from 'react-icons/bs';

export default function Navigation() {
  return (
    <div className="border-b bg-slate-100">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between p-5">
        <div className="font-semibold">React Form</div>
        <div className="flex items-center gap-4 text-lg">
          <BsGithub></BsGithub>
          <BsTwitter></BsTwitter>
        </div>
      </nav>
    </div>
  );
}
