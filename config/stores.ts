import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

type StoreState<T> = T & {
    setState: <K extends keyof T>(key: K, value: T[K]) => void;
};
type GeneralState = {
    isMobile: boolean;
    selectedView: string;
};

const generalState: GeneralState = {
    isMobile: false,
    selectedView: "channel",
};

export const generalStore = create(
    persist<StoreState<typeof generalState>>(
        (set) => ({
            ...generalState,
            setState: (key, value) =>
                set((state) => ({
                    ...state,
                    [key]: value,
                })),
        }),
        {
            name: "general-storage",
        }
    )
);

type AuthState = {
    user: Record<string, string>;
    isAuthenticated: boolean;
    token: null | string;
};

const authState: AuthState = {
    user: {},
    isAuthenticated: false,
    token: null,
};

export const authStore = create(
    persist<StoreState<typeof authState>>(
        (set) => ({
            ...authState,
            setState: (key, value) =>
                set((state) => ({
                    ...state,
                    [key]: value,
                })),
        }),
        {
            name: "auth-storage",
        }
    )
);

type InputState = {
    inputs: Record<string, string | boolean | number>;
    setInputs: (name: string, value: string | number | boolean) => void;
};

export const inputStore = create(
    devtools<InputState>((set) => ({
        inputs: {},
        setInputs: (name, value) =>
            set((state) => ({
                inputs: {
                    ...state.inputs,
                    [name]: value,
                },
            })),
    }))
);

type ToggleState = {
    toggles: Record<string, boolean>;
    setToggles: (name: string, value: boolean) => void;
};

export const toggleStore = create(
    devtools<ToggleState>((set) => ({
        toggles: {},
        setToggles: (name, value) =>
            set((state) => ({
                toggles: {
                    ...state.toggles,
                    [name]: value,
                },
            })),
    }))
);
