import { SidebarItem } from '../../components/dashboard/SidebarItem';
import { StatCard } from '../../components/dashboard/StatCard';
import { ChartContainer } from '../../components/dashboard/ChartContainer';

const sidebarItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/56fd6267b1ab060fc33101012fdb65114fab6b9bb7fcefe60483c3c556164859?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Dashboard", isActive: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8ca490a0044b40d14d83e7a81adf319075518255b9c967122008607fb38a912?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Claim" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1f01254fa4ca6666ed468dca3b2c25ee5c1c586540f0723d99b4cede4ed231c?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Calculator" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/851b2c01e2951eb22ff7fb8ac25b90d8b78f73c0338c7476eb5a6ddb89747592?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd", label: "Stake" },
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

export function Dashboard() {
    return (
        <div className="flex flex-col bg-gray-950">
            <header className="flex flex-wrap gap-10 justify-between items-center px-6 w-full text-white bg-zinc-900 min-h-[100px] max-md:px-5 max-md:max-w-full">
                <div className="gap-4 self-stretch my-auto text-4xl font-black w-[105px]">
                    <span className="italic font-semibold">ic</span>
                    <span className="">ETH</span>
                </div>
                <div className="gap-4 self-stretch my-auto text-2xl font-semibold leading-snug whitespace-nowrap w-[127px]">
                    Dashboard
                </div>
                <div className="flex flex-wrap gap-9 items-center self-stretch pr-0.5 my-auto text-xl font-medium min-w-[240px] w-[930px] max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c062aa5d77d4ae9283ce4fd6bf934ea04f4d29569530b309bd659d1104a7ca?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd"
                        alt="Navigation icon"
                        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                    />
                    <button className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto rounded-xl border-cyan-400 border-solid bg-[linear-gradient(90deg,#30CEDF_0.15%,#1940B5_99.86%)] border-[3px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c6cdad24ef90be18496f0b8b1b867016c9e49cf6a9f35f6e0d5d1ef1d53be8b?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd"
                            alt="Wallet icon"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                        />
                        <span>Connect Wallet</span>
                    </button>
                </div>
            </header>

            <div className="self-center w-full max-w-[1385px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <nav className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow max-md:mt-7">
                            <div className="flex z-10 flex-col my-auto w-full max-md:-mr-0.5">
                                {sidebarItems.map((item, index) => (
                                    <div key={index} className={index > 0 ? "mt-3.5" : ""}>
                                        <SidebarItem {...item} />
                                    </div>
                                ))}

                                <div className="flex gap-8 items-start self-start px-3 py-2.5 ml-4 rounded-lg bg-stone-300 bg-opacity-30 mt-[486px] max-md:mt-10 max-md:ml-2.5">
                                    {[9, 10, 11].map((num) => (
                                        <img
                                            key={num}
                                            loading="lazy"
                                            src={`http://b.io/ext_${num}-`}
                                            alt={`Social icon ${num}`}
                                            className="object-contain shrink-0 w-6 aspect-square"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex shrink-0 w-0.5 bg-stone-300 bg-opacity-30 h-[960px]" />
                        </div>
                    </nav>

                    <main className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
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
                                                            alt="Total value icon"
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
                                            <div>Chart content</div>
                                        </ChartContainer>
                                    </div>

                                    <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                                        <ChartContainer
                                            title="icETH vs ETH"
                                            subtitle="How much icETH is growing over ETH"
                                            buttonText="connect for data"
                                        >
                                            <div>Chart content</div>
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
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}