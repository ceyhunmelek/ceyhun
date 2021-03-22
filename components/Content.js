export default function IndexPage() {
  return (
    <div className="p-6 md:w-2/3 w-full">
      <div className="uppercase tracking-wide text-xl text-blue-500 font-semibold mb-3">Ceyhun Melek</div>
      <div className="flex align-middle gap-1 mb-2">
        <img src={"/icons/job.svg"} width={18}/>
        <a href="https://www.apisinnovation.com/" className="block text-md leading-tight font-medium text-black hover:underline">
          Fullstack Developer @Apis Innovation</a>
      </div>
      <div className="flex align-middle gap-1 mb-2">
        <img src={"/icons/location.svg"} width={18}/>
        <a className="block text-md leading-tight font-medium text-black">Istanbul</a>
      </div>
      <div className="flex mt-2 gap-3">
        <a href="mailto:ceyhunulasmelek@gmail.com">
          <img src={"/icons/mail.svg"} width="24" alt="Instagram"/>
        </a>
        <a href="https://github.com/ceyhunmelek">
          <img src={"/icons/github.svg"} width="24" alt="Instagram"/>
        </a>
        <a href="https://www.instagram.com/ceyhunmelek/">
          <img src={"/icons/instagram.svg"} width="24" alt="Instagram"/>
        </a>
        <a href="https://www.linkedin.com/in/ceyhunmelek/">
          <img src={"/icons/linkedin.svg"} width="24" alt="Instagram"/>
        </a>
      </div>
    </div>
  )
}
