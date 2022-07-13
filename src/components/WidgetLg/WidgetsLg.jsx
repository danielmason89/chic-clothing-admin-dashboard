import { WidgeLg, WidgeLgTitle, WidgeLgTable, WidgeLgTr, WidgeLgTh, WidgeLgUser, WidgeLgImg, WidgeLgName, WidgeLgDate, WidgeLgAmount, WidgeLgStatus, WidgeLgTbody } from "./WidgetsLgStyles"

export function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgeLgButton " + type}> {type}</button >
    }
    return (
        <WidgeLg>
            <WidgeLgTitle>Latest transactions</WidgeLgTitle>
            <WidgeLgTable>
                <WidgeLgTbody>
                    <WidgeLgTr>
                        <WidgeLgTh>Customer</WidgeLgTh>
                        <WidgeLgTh>Date</WidgeLgTh>
                        <WidgeLgTh>Amount</WidgeLgTh>
                        <WidgeLgTh>Status</WidgeLgTh>
                    </WidgeLgTr>
                </WidgeLgTbody>
                <WidgeLgTbody>
                    <WidgeLgTr>
                        <WidgeLgUser>
                            <WidgeLgImg src="https://images.pexels.com/photos/12629717/pexels-photo-12629717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <WidgeLgName>Susan Car</WidgeLgName>
                        </WidgeLgUser>
                        <WidgeLgDate>2 Jul 2022</WidgeLgDate>
                        <WidgeLgAmount>$120.00</WidgeLgAmount>
                        <WidgeLgStatus>
                            <Button type="Approved" />
                        </WidgeLgStatus>
                    </WidgeLgTr>
                </WidgeLgTbody>
                <WidgeLgTbody>
                    <WidgeLgTr>
                        <WidgeLgUser>
                            <WidgeLgImg src="https://images.pexels.com/photos/12629717/pexels-photo-12629717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <WidgeLgName>Susan Car</WidgeLgName>
                        </WidgeLgUser>
                        <WidgeLgDate>2 Jul 2022</WidgeLgDate>
                        <WidgeLgAmount>$120.00</WidgeLgAmount>
                        <WidgeLgStatus>
                            <Button type="Declined" />
                        </WidgeLgStatus>
                    </WidgeLgTr>
                </WidgeLgTbody>
                <WidgeLgTbody>
                    <WidgeLgTr>
                        <WidgeLgUser>
                            <WidgeLgImg src="https://images.pexels.com/photos/12629717/pexels-photo-12629717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <WidgeLgName>Susan Car</WidgeLgName>
                        </WidgeLgUser>
                        <WidgeLgDate>2 Jul 2022</WidgeLgDate>
                        <WidgeLgAmount>$120.00</WidgeLgAmount>
                        <WidgeLgStatus>
                            <Button type="Pending" />
                        </WidgeLgStatus>
                    </WidgeLgTr>
                </WidgeLgTbody>
                <WidgeLgTbody>
                    <WidgeLgTr>
                        <WidgeLgUser>
                            <WidgeLgImg src="https://images.pexels.com/photos/12629717/pexels-photo-12629717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <WidgeLgName>Susan Car</WidgeLgName>
                        </WidgeLgUser>
                        <WidgeLgDate>2 Jul 2022</WidgeLgDate>
                        <WidgeLgAmount>$120.00</WidgeLgAmount>
                        <WidgeLgStatus>
                            <Button type="Approved" />
                        </WidgeLgStatus>
                    </WidgeLgTr>
                </WidgeLgTbody>
                <WidgeLgTbody>
                    <WidgeLgTr>
                        <WidgeLgUser>
                            <WidgeLgImg src="https://images.pexels.com/photos/12629717/pexels-photo-12629717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <WidgeLgName>Susan Car</WidgeLgName>
                        </WidgeLgUser>
                        <WidgeLgDate>2 Jul 2022</WidgeLgDate>
                        <WidgeLgAmount>$120.00</WidgeLgAmount>
                        <WidgeLgStatus>
                            <Button type="Approved" />
                        </WidgeLgStatus>
                    </WidgeLgTr>
                </WidgeLgTbody>
            </WidgeLgTable>
        </WidgeLg>
    )
}