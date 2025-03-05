import { useForm } from "react-hook-form"

export const Modal = ({ onClose, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm()

  const submitForm = (data) => {
    onSubmit(data)
    reset()
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Додати нового користувача</h2>
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4">
          <input
            {...register("name", { required: true })}
            placeholder="Ім'я"
            className="border p-2 rounded-lg"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="border p-2 rounded-lg"
          />
          <input
            {...register("phone", { required: true })}
            placeholder="Телефон"
            className="border p-2 rounded-lg"
          />
          <input
            {...register("website", { required: true })}
            placeholder="Сайт"
            className="border p-2 rounded-lg"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Скасувати
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Додати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
