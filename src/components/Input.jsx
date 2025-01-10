export default function Input() {
  return (
    <>
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between"></div>

        <form id="settings" className="mt-6 flex w-full flex-col gap-5">
          <div className="grid gap-3">
            <label htmlFor="name" className="text-sm font-semibold">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="Digite seu nome"
            />
          </div>
        </form>
      </div>
    </>
  );
}
