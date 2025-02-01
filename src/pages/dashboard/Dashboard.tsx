import { StatCard } from './components/StatCard';
import { SidebarItem } from './components/SidebarItem';
import { ChartContainer } from './components/ChartContainer';
import { Layout } from '../layout/Layout';
import React from 'react';

const sidebarItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/56fd6267b1ab060fc33101012fdb65114fab6b9bb7fcefe60483c3c556164859?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Dashboard", isActive: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8ca490a0044b40d14d83e7a81adf319075518255b9c967122008607fb38a912?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Claim" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1f01254fa4ca6666ed468dca3b2c25ee5c1c586540f0723d99b4cede4ed231c?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Calculator" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f18be3a27b1eaa37f4856827d5066875633de751be7e06745d4268d6cc8f578c?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Stake" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/894c494bf9c457680db1697abaca71ea5e616b67aab1921e1d45b2507031e5c0?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Swap" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/50e632128c3dd9787c78881d8d7f7a88c7137b812c1bfa4154635f34c0edeb6c?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Docs" }
];

const statsData = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ebeaf8f7b27898feb1e5da13429bbec4fd6763e5b005c49bfabd46d6d1f1602?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Market Cap", value: "$19.47M" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0d915007a8d3fd2263092e884c408676ee7d0db48ed1726e50501ca524a1e78?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Currently Supply", value: "7,183" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c07c5d25c8ae47d08f5b3365f8ac0464759f979dc6ac615e8253924bcfbb336?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Volume", value: "0.72M" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/406defb8cb504432c55ed845e215335a6b8bcd13a5fe3b57ee50bc69502ea60b?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Streaming Fee", value: "0.75%" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d5e6c016b7ebdc06772b10e5497a927a3985b1cff34a24cc6d2d203eb48dc88?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Minting", value: "0.00%" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4e54ea7680ddab2b2679f6fea75669bc1de739a660dd041b03450e3e937c8c9?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Redeeming Fee", value: "0.25%" }
];

export const Dashboard: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const handleClick = (index: number) => {
        setActiveIndex(index);
    };


    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col mx-auto w-full bg-gray-800 rounded-2xl border border-solid border-white border-opacity-10 max-md:mt-7 max-md:max-w-full">
                                    <div className="flex flex-wrap gap-10 justify-between items-start px-6 py-7 min-h-[197px] max-md:px-5 max-md:max-w-full">
                                        {statsData.map((stat, index) => (
                                            <StatCard key={index} {...stat} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow w-full font-medium bg-gray-800 rounded-2xl border border-solid border-white border-opacity-10 max-md:mt-7">
                                    <div className="flex flex-col justify-between items-start px-5 py-8 w-full min-h-[197px]">
                                        <div className="flex flex-col">
                                            <div className="flex gap-1.5 items-center text-sm text-white">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1237c6ff47c8ffa26eb65e7ecf6bd69dedaf2fd4f0502844a8334c182e9d2a8b?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd"
                                                    alt="Total Value Staked icon"
                                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                                />
                                                <div className="self-stretch my-auto w-[127px]">
                                                    Total Value Staked
                                                </div>
                                            </div>
                                            <div className="mt-4 max-w-full text-3xl rounded-none w-[119px]">
                                                $0 USD
                                            </div>
                                        </div>
                                        <div className="flex gap-5 items-center mt-6 whitespace-nowrap">
                                            <div className="flex flex-col self-stretch my-auto">
                                                <div className="text-lg text-white">0</div>
                                                <div className="flex gap-2 items-center mt-1 text-sm text-zinc-500">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/22268ca16b4ad8fe37eafad93bcff02c3375fa8007a8a8c5b6b2d953edc76fbb?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd"
                                                        alt="icETH icon"
                                                        className="object-contain shrink-0 self-stretch my-auto w-5 rounded-full aspect-square"
                                                    />
                                                    <div className="self-stretch my-auto">icETH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                                <ChartContainer
                                    title="Staked Interest"
                                    subtitle="Net Yield vs ETH"
                                    buttonText="connect for data"
                                >
                                    <div className="flex flex-wrap gap-2.5 mt-5 max-md:max-w-full">
                                        <div className="flex flex-col justify-center items-end text-xs font-bold text-right whitespace-nowrap text-slate-300">
                                            <div>21,25k</div>
                                            <div className="mt-9">21k</div>
                                            <div className="mt-9">20,75k</div>
                                            <div className="mt-9">20,50k</div>
                                            <div className="mt-9">20,25k</div>
                                            <div className="mt-9">20k</div>
                                        </div>
                                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
                                            <div className="shrink-0 h-px border border-dashed border-slate-600 max-md:max-w-full" />
                                            <div className="shrink-0 mt-12 h-0 border border-dashed border-slate-600 max-md:mt-10 max-md:max-w-full" />
                                            <div className="shrink-0 mt-24 h-px border border-dashed border-slate-600 max-md:mt-10 max-md:max-w-full" />
                                            <div className="shrink-0 mt-12 h-px border border-dashed border-slate-600 max-md:mt-10 max-md:max-w-full" />
                                            <div className="shrink-0 mt-12 h-px border border-dashed border-slate-600 max-md:mt-10 max-md:max-w-full" />
                                        </div>
                                    </div>
                                </ChartContainer>
                            </div>

                            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                                <ChartContainer
                                    title="icETH vs ETH"
                                    subtitle="How much icETH is growing over ETH"
                                    buttonText="connect for data"
                                >
                                    <div className="flex gap-2.5 mt-3">
                                        <div className="flex flex-col justify-center items-end text-xs font-bold text-right whitespace-nowrap text-slate-300">
                                            <div>1.0035</div>
                                            <div className="mt-9">1.0030</div>
                                            <div className="mt-9">1.0025</div>
                                            <div className="mt-9">1.0020</div>
                                            <div className="mt-9">1.0015</div>
                                            <div className="mt-9">1.0010</div>
                                        </div>
                                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                            <div className="shrink-0 h-px border border-dashed border-slate-600" />
                                            <div className="shrink-0 mt-12 h-0 border border-dashed border-slate-600 max-md:mt-10" />
                                            <div className="shrink-0 mt-24 h-px border border-dashed border-slate-600 max-md:mt-10" />
                                            <div className="shrink-0 mt-12 h-px border border-dashed border-slate-600 max-md:mt-10" />
                                            <div className="shrink-0 mt-12 h-px border border-dashed border-slate-600 max-md:mt-10" />
                                        </div>
                                    </div>
                                </ChartContainer>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 max-md:pr-5 max-md:mr-1 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow items-start px-12 py-16 text-white max-md:px-5 max-md:max-w-full">
                                    <h2 className="text-4xl font-semibold leading-snug">
                                        Join the Community!
                                    </h2>
                                    <p className="mt-2 text-2xl font-medium leading-8">
                                        Enter on Index Coop group
                                        <br />
                                        at Discord and get the best news
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                                <button className="gap-4 self-stretch p-4 mt-20 w-full text-3xl font-medium text-white rounded-2xl border-cyan-400 border-solid bg-[linear-gradient(90deg,#30CEDF_0.15%,#1940B5_99.86%)] border-[4.566px] max-md:mt-10">
                                    enter discord
                                </button>
                            </div>
                        </div>
                    </div>
                </div>;
            case 1:
                return <div>Profile Content</div>;
            case 2:
                return <div>Settings Content</div>;
            default:
                return <div>Home Content</div>;
        }
    };
    return (

        <Layout>
            <>

                <main className="self-center w-full max-w-[1385px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <aside className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                            <nav className="flex grow max-md:mt-7">
                                <div className="flex z-10 flex-col mt-7 w-full max-md:-mr-0.5">
                                    {sidebarItems.map((item, index) => (
                                        <div key={index} className={index > 0 ? "mt-3.5" : ""}>
                                            <SidebarItem
                                                key={index}
                                                icon={item.icon}
                                                label={item.label}
                                                isActive={index === activeIndex}
                                                onClick={() => handleClick(index)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex shrink-0 w-0.5 bg-stone-300 bg-opacity-30 h-[960px]" />
                            </nav>
                        </aside>

                        <section className="flex mt-7 flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                            {renderContent()}
                        </section>
                    </div>
                </main>
            </>
        </Layout>
    );
}