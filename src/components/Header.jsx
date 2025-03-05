export const Header = ({ openModal, isChecked, setIsChecked, setSearchQuery }) => {

    const handleCheckBox = (e) => {
        setIsChecked(e.target.checked)
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    return (
        <div className="flex justify-around items-center gap-4 mb-4">
            <label>
                <input type="checkbox" onChange={handleCheckBox} checked={isChecked} />
                Сортувати за алфавітом
            </label>
            <input
                type="text"
                placeholder="Шукати за ім'ям"
                onChange={handleSearch}
                className="border p-2 rounded-lg"
            />
            <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                Додати нового
            </button>
        </div>
    )
}