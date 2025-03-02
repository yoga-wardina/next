import { inputStore } from "@/config/stores";

export const emailRgex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRgex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

interface Inputs {
    label: string;
    name: string;
    error?: string | null;
    type?: string | null;
}

export const RequiredTextInput = ({ label, name, error, type }: Inputs) => {
    const { inputs, setInputs } = inputStore();
    return (
        <div className=" flex flex-col gap-1 w-full">
            <label htmlFor={name}>
                {label} <b className="text-red-600">*</b>
            </label>
            <input
                required
                id={name}
                name={name}
                onChange={(e) => setInputs(name, e.target.value)}
                value={inputs[name] ?? ""}
                type={type || "text"}
                className="focus:ring-0 text-sm bg-dark-3 px-3 focus:outline-0 h-10"
            />
            {error && <span className="text-red-600 text-xs">{error}</span>}
        </div>
    );
};
