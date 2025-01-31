import * as React from 'react';
import { RawImg } from '../components/RawImg';
import { FeatureCard } from '../components/FeatureCard';
import { Layout } from './layout/Layout';

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



    return (
        <Layout>
            <>
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

     
            </>
        </Layout>
    );
};