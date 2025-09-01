import { useState } from "react";

export default function ContactFrom() {
    const [errors, setErrors] = useState({
        error: false,
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);
        const { firstName, lastName, email, message } = Object.fromEntries(formdata.entries());

        let newErrors = { error: false, firstName: "", lastName: "", email: "" };

        if (!firstName || firstName.trim().length < 2) {
            newErrors.firstName = "First name must be at least 2 characters.";
            newErrors.error = true;
        }

        if (!lastName || lastName.trim().length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters.";
            newErrors.error = true;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            newErrors.email = "Enter a valid email address.";
            newErrors.error = true;
        }

        setErrors(newErrors);

        if (newErrors.error) return;

        alert(`Form submitted!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <div className="isolate bg-gray-900 px-6 py-24 sm:py-15 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact Us</h2>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                            <p
                                id="error-first-name"
                                className="mt-1 text-sm text-red-500 font-medium"
                            >
                                {errors.firstName}
                            </p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                            <p
                                id="error-last-name"
                                className="mt-1 text-sm text-red-500 font-medium"
                            >
                                {errors.lastName}
                            </p>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                            <p
                                id="error-email"
                                className="mt-1 text-sm text-red-500 font-medium"
                            >
                                {errors.email}
                            </p>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}
