export const Header = ({ openModal, isChecked, setIsChecked, setSearchQuery }) => {

    const handleCheckBox = (e) => {
        setIsChecked(e.target.checked)
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 px-4">
            <label className="flex items-center gap-2">
                <input type="checkbox" onChange={handleCheckBox} checked={isChecked} />
                <span className="text-sm md:text-base">Сортувати за алфавітом</span>
            </label>
            <input
                type="text"
                placeholder="Шукати за ім'ям"
                onChange={handleSearch}
                className="flex-1 border p-2 rounded-lg text-sm md:text-base"
            />
            <button
                onClick={openModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm md:text-base w-full md:w-auto"
            >
                Додати нового
            </button>
        </div>
    )
}