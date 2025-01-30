import * as React from 'react';
import { FooterLink } from '../components/FooterLink';
import { RawImg } from '../components/RawImg';
import { SocialIcon } from '../components/SocialIcon';
import { FeatureCard } from '../components/FeatureCard';

export const Landing: React.FC = () => {
    const features = [
        {
            icon: 'chart-dots',
            title: 'High liquidity',
            description: 'icETH provides enhanced yield on Ethereum (ETH) by using Lido\'s Liquid Staked Ethereum (stETH) as collateral to recursively borrow Wrapped Ethereum (WETH) through Aave.'
        },
        {
            icon: 'shield-check',
            title: 'Low risks',
            description: 'You can buy from the Index Coop App, directly from Uniswap OR larger buyers can mint from IndexSets. If you need help with minting please reach to the Index Coop Discord in the #icETH channel.'
        },
        {
            icon: 'chart-pie',
            title: 'Growed market cap',
            description: 'Built on Set\'s battle-tested leverage token infrastructure, icETH multiplies the staking rate for stETH while minimizing transaction costs and risk associated with maintaining collateralized debt in Aave.'
        }
    ];

    const socialIcons = ['github', 'twitter', 'discord', 'medium'];

    const footerLinks = [
        'Cookie Policy', 'Privacy', 'Terms', 'Press Kit', 'Imprint', 'Preferences', 'Licenses'
    ];

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />

            <div className="w-full min-h-screen bg-gray-950">
                <nav className="flex justify-between items-center px-20 py-5 max-md:p-10">
                    <div className="text-2xl font-semibold text-white">icETH</div>
                    <div className="flex gap-5 max-sm:hidden">
                        <div className="text-white no-underline">Dashboard</div>
                        <div className="text-white no-underline">More about</div>
                    </div>
                </nav>

                <section className="flex gap-10 items-center px-20 py-10 max-md:flex-col max-md:p-10">
                    <div className="max-w-[600px]">
                        <h1 className="mb-5 text-5xl font-semibold text-white">The coldest over liquids</h1>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500">
                            Stake ETH like you never did before. The Interest Compounding ETH Index (icETH) enhances staking returns with a leveraged liquid staking strategy.
                        </p>
                        <div className="flex gap-5">
                            <button className="px-6 py-3 font-medium text-white bg-cyan-400 rounded-lg cursor-pointer border-[none]">More about</button>
                            <button className="px-6 py-3 font-medium text-white rounded-lg border-2 border-cyan-400 border-solid cursor-pointer">Dashboard</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <RawImg image="https://placehold.co/800x500/30cedf/30cedf" altText="Dashboard Preview" className="w-full rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)]" />
                    </div>
                </section>

                <section className="grid gap-10 px-20 py-16 grid-cols-[repeat(3,1fr)] max-md:p-10 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </section>

                <section className="flex gap-10 items-center px-20 py-16 max-md:flex-col max-md:p-10">
                    <div className="max-w-[600px]">
                        <h2 className="mb-5 text-5xl font-semibold text-blue-200">Understanding the icETH</h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500">
                            The Interest Compounding ETH Index (icETH) enhances staking returns with a leveraged liquid staking strategy. Built on Set's battle-tested leverage token infrastructure, icETH multiplies the staking rate for stETH while minimizing transaction costs and risk associated with maintaining collateralized debt in Aave. Token holders retain spot exposure to ETH and amplify staking returns up to 2.5x.
                        </p>
                        <button className="px-6 py-3 text-white rounded-lg border-2 border-cyan-400 border-solid cursor-pointer">watch on youtube</button>
                    </div>
                    <div className="overflow-hidden flex-1 rounded-xl">
                        <RawImg image="https://placehold.co/800x450/1940b5/1940b5" altText="Video Preview" />
                    </div>
                </section>

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
            </div>
        </>
    );
};