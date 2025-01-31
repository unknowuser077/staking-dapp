// src/components/Footer.tsx
import * as React from 'react';
import { SocialIcon } from '../../components/SocialIcon';
import { RawImg } from '../../components/RawImg';
import { FooterLink } from '../../components/FooterLink';

export const Footer: React.FC = () => {
    const socialIcons = ['github', 'twitter', 'discord', 'medium'];
    const footerLinks = [
        'Cookie Policy', 'Privacy', 'Terms', 'Press Kit', 'Imprint', 'Preferences', 'Licenses'
    ];

    return (
        <footer>
            <footer className="px-20 py-16 mt-16 bg-indigo-950 rounded-[40px_40px_0_0] max-md:p-10">
                <div className="flex justify-between mb-10 max-sm:flex-col max-sm:gap-10">
                    <div className="max-w-[400px]">
                        <h3 className="mb-5 text-xl font-semibold text-white">Always stay safe</h3>
                        <p className="leading-relaxed text-zinc-500">
                            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating on Index
                        </p>
                        <form className="flex gap-2.5 mt-5 max-sm:flex-col">
                            <label htmlFor="emailInput" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="emailInput"
                                placeholder="Your email address"
                                className="flex-1 p-3 rounded-lg border-[none]"
                                aria-label="Email address"
                            />
                            <button type="submit" className="px-6 py-3 text-white bg-cyan-400 rounded-lg cursor-pointer border-[none]">
                                sign up
                            </button>
                        </form>
                    </div>
                    <div className="max-w-[400px]">
                        <h3 className="mb-5 text-xl font-semibold text-white">Be at Coop Community 🦉</h3>
                        <div className="flex gap-4">
                            {socialIcons.map((icon, index) => (
                                <SocialIcon key={index} icon={icon} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-10 mt-10 border-t border-solid border-t-white border-t-opacity-10 max-sm:flex-col max-sm:gap-5 max-sm:text-center">
                    <RawImg image="https://placehold.co/120x30/30cedf/30cedf" altText="Footer Logo" className="max-w-[120px]" />
                    <div className="flex gap-5 max-sm:flex-wrap max-sm:justify-center">
                        {footerLinks.map((link, index) => (
                            <FooterLink key={index} text={link} />
                        ))}
                    </div>
                    <div className="text-sm text-white">® 2022 Index Coop Technology LLC.</div>
                </div>
            </footer>
        </footer>
    );
};